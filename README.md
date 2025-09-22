# Split Pie 🥧

Split Bills, Stay Chill `Split Pie` es una solución diseñada para simplificar la forma en que se dividen y gestionan los gastos compartidos.

---

## 🎯 ¿Cuál es el problema?

Dividir gastos en grupos es complicado. Ya sea para pagar suscripciones, rentas o planes familiares, el proceso es manual y problemático: una persona debe pagar todo, calcular la parte de cada quien, y luego cobrarle a los demás. Esta situación genera malentendidos, pérdida de tiempo y fricciones entre los participantes.

---

## 💡 ¿Cuál es la solución?

`Split Pie` resuelve este desafío automatizando todo el proceso de pagos colaborativos. Nuestra plataforma permite:
* Crear un **grupo de pago** en segundos.
* **Asignar el monto** que cada participante debe aportar.
* Generar **enlaces de pago únicos** para que cada persona pague su parte de forma segura.

Una vez que todos han contribuido, el monto total se transfiere de forma automática al destinatario final.

---

## ✨ ¿Cuáles son los beneficios?

* **Automatización Completa:** Se elimina la necesidad de cálculos manuales y transferencias individuales entre los participantes.
* **Transparencia en Tiempo Real:** Todos los usuarios pueden monitorear el estado de los pagos del grupo.
* **Seguridad y Confianza:** `Split Pie` gestiona los fondos para confirmar los pagos de manera segura, sin exponer la información bancaria de los usuarios al resto del grupo.
* **Escalabilidad:** La arquitectura modular permite agregar nuevas funciones, como la integración con bancos o la generación de reportes, sin afectar el sistema principal.
* **Mantenibilidad:** El código está claramente separado por responsabilidades (frontend, backend, capa de pagos), lo que facilita su mantenimiento y actualización.

---

## 🏗️ Arquitectura y Stack Simple

La solución se compone de tres capas principales que se comunican a través de una API REST con formato JSON.

* **Frontend (Capa de Presentación):**
    * **Descripción:** Es la interfaz web con la que interactúan los usuarios para dividir cuentas y monitorear el progreso.
    * **Tecnología:** **React / Next.js**.

* **Backend (Capa de Lógica de Negocio):**
    * **Descripción:** Actúa como el orquestador principal. Gestiona la lógica para dividir las cuentas, las validaciones y la comunicación entre el frontend y la API de pagos.
    * **Tecnología:** **Node.js / Express**.

* **Capa de Pagos:**
    * **Descripción:** Se encarga de toda la interacción con la red de pagos, incluyendo la creación de solicitudes de pago (`incoming payments`), cotizaciones (`quotes`) y la ejecución