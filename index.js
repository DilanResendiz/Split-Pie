// Tutorial del cliente de Open Payments
// Objetivo: Realizar un pago entre pares entre dos direcciones de billetera (usando cuentas en la cuenta de prueba)

// https://ilp.interledger-test.dev/daarick -> cliente
// https://ilp.interledger-test.dev/daarickprueba1 -> remitente
// https://ilp.interledger-test.dev/daarickprueba2 -> receptor
import * as readline from 'node:readline/promises';
// ConfiguraciÃ³n inicial
// a. Importar dependencias y configurar el cliente
import { createAuthenticatedClient, isFinalizedGrant } from "@interledger/open-payments";
import fs from "fs";
import Readline from "readline/promises";
//import { isFinalizedGrant } from "@interledger/open-payments";
const pagobase= async (monto,walletAdressUri,privateKeye,keyid,receivingwallet) => {
    
    // b. Crear una instancia del cliente Open Payments
    const client = await createAuthenticatedClient({
        walletAddressUrl: walletAdressUri,
        // c. Cargar la clave privada del archivo
        privateKey : privateKeye,
        keyId : keyid,
        // d. Configurar las direcciones de las billeteras del remitente y el receptor
    });

// Flujo de pago entre pares
// 1. Obtener una concesiÃ³n para un pago entrante)
    const sendingWalletAdress = await client.walletAddress.get({
        url : walletAdressUri
    });

    const receivingWalletAdress = await client.walletAddress.get({
        url : receivingwallet
    })

    console.log(sendingWalletAdress, receivingWalletAdress);

// 2. Obtener una concesiÃ³n para un pago entrante
    const incomingPaymentGrant = await client.grant.request(
        {
            url : receivingWalletAdress.authServer,
        },
        {
            access_token : {
                access: [
                    {
                        type : "incoming-payment",
                        actions : ["create"],
                    }
                ]
            }
        }    
    );

    if(!isFinalizedGrant(incomingPaymentGrant)){
        throw new Error ("Se espera a que finalice la concesion");
    }

    console.log(incomingPaymentGrant);
// 3. Crear un pago entrante para el receptor
    const incomingPayment = await client.incomingPayment.create(
        {
            url : receivingWalletAdress.resourceServer,
            accessToken : incomingPaymentGrant.access_token.value,
        },
        {
            walletAddress : receivingWalletAdress.id,
            incomingAmount : {
                assetCode: receivingWalletAdress.assetCode,
                assetScale : receivingWalletAdress.assetScale,
                value : monto,
            },
        }
    );

    console.log({incomingPayment});
// 4. Crear un concesiÃ³n para una cotizaciÃ³n
    const quoteGrant = await client.grant.request(
        {
            url : sendingWalletAdress.authServer,
        },
        {
            access_token : {
                access : [
                    {
                        type : "quote",
                        actions : ["create"],
                    }
                ]
            }
        }
    );

    if (!isFinalizedGrant(quoteGrant)){
        throw new Error("Se espera a que finalice la concesion");
    }

    console.log(quoteGrant);

// 5. Obtener una cotizaciÃ³n para el remitente
    const quote = await client.quote.create(
        {
            url : receivingWalletAdress.resourceServer,
            accessToken : quoteGrant.access_token.value,
        },
        {
            walletAddress : sendingWalletAdress.id,
            receiver : incomingPayment.id,
            method : "ilp",
        }
    );

    console.log({quote})

// 6. Obtener una concesiÃ³n para un pago saliente
    const outgoingPaymentGrant = await client.grant.request(
        {
            url: sendingWalletAdress.authServer,
        },
        {
            access_token: {
                access: [
                    {
                        type: "outgoing-payment",
                        actions: ["create"],
                        limits: {
                            debitAmount: quote.debitAmount,
                        },
                        identifier: sendingWalletAdress.id,
                    }
                ]
            },
            interact: {
                start: ["redirect"],
            },
        }
    );

    console.log({outgoingPaymentGrant});

// 7. Continuar con la concesiÃ³n del pago saliente
    await Readline
        .createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        .question("Presione enter para continuar con el pago saliente...");

// 8. Finalizar la concesiÃ³n del pago saliente
    const finalizedOutgoingPaymentGrant = await client.grant.continue({
        url: outgoingPaymentGrant.continue.uri,
        accessToken : outgoingPaymentGrant.continue.access_token.value,
    });

    if(!isFinalizedGrant(finalizedOutgoingPaymentGrant)){
        throw new Error("Se espera a que finalice la concesion");
    }

// 9. Continuar con la cotizaciÃ³n de pago saliente
    const outgoingPayment = await client.outgoingPayment.create(
        {
            url: sendingWalletAdress.resourceServer,
            accessToken : finalizedOutgoingPaymentGrant.access_token.value,
        },
        {
            walletAddress: sendingWalletAdress.id,
            quoteId : quote.id,
        }
    );

    console.log({outgoingPayment});
}

const privateKeye = fs.readFileSync("private.key", "utf-8");
async function pagoMultiple(MontoACobrar,NumAsociados){
let pagosIndividuales= MontoACobrar/NumAsociados;

const pagos= [];
for(let i=0;i<NumAsociados;i++){
    pagos.push(pagobase(pagosIndividuales,"https://ilp.interledger-test.dev/5dd0e562",privateKeye,"c208b877-85c4-4946-86d0-452f0bc5a0ea","https://ilp.interledger-test.dev/pepencio")
);
}

await Promise.all(pagos);}
pagoMultiple(1000,4);

