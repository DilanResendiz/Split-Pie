# Split Pie 🥧

Split Bills, Stay Chill. `Split Pie` es una solución diseñada para simplificar la forma en que se dividen y gestionan los gastos compartidos.

---

## 🎯 ¿Cuál es el problema?

[cite_start]Dividir gastos en grupos es complicado[cite: 10, 84]. [cite_start]Ya sea para pagar suscripciones, rentas o planes familiares, el proceso es manual y problemático: una persona debe pagar todo, calcular la parte de cada quien, y luego cobrarle a los demás[cite: 10, 84]. [cite_start]Esta situación genera malentendidos, pérdida de tiempo y fricciones entre los participantes[cite: 11, 85].

---

## 💡 ¿Cuál es la solución?

[cite_start]`Split Pie` resuelve este desafío automatizando todo el proceso de pagos colaborativos[cite: 12, 86]. Nuestra plataforma permite:
* [cite_start]Crear un **grupo de pago** en segundos[cite: 13, 86].
* [cite_start]**Asignar el monto** que cada participante debe aportar[cite: 13, 86].
* [cite_start]Generar **enlaces de pago únicos** para que cada persona pague su parte de forma segura[cite: 13, 86].

[cite_start]Una vez que todos han contribuido, el monto total se transfiere de forma automática al destinatario final[cite: 14, 87].

---

## ✨ ¿Cuáles son los beneficios?

* [cite_start]**Automatización Completa:** Se elimina la necesidad de cálculos manuales y transferencias individuales entre los participantes[cite: 17, 89].
* [cite_start]**Transparencia en Tiempo Real:** Todos los usuarios pueden monitorear el estado de los pagos del grupo[cite: 18, 91].
* [cite_start]**Seguridad y Confianza:** `Split Pie` gestiona los fondos para confirmar los pagos de manera segura, sin exponer la información bancaria de los usuarios al resto del grupo[cite: 19, 92].
* [cite_start]**Escalabilidad:** La arquitectura modular permite agregar nuevas funciones, como la integración con bancos o la generación de reportes, sin afectar el sistema principal[cite: 66, 142].
* [cite_start]**Mantenibilidad:** El código está claramente separado por responsabilidades (frontend, backend, capa de pagos), lo que facilita su mantenimiento y actualización[cite: 68, 144].

---

## 🏗️ Arquitectura y Stack Simple

[cite_start]La solución se compone de tres capas principales que se comunican a través de una API REST con formato JSON[cite: 73, 149].

* **Frontend (Capa de Presentación):**
    * [cite_start]**Descripción:** Es la interfaz web con la que interactúan los usuarios para dividir cuentas y monitorear el progreso[cite: 23, 69, 96, 145].
    * [cite_start]**Tecnología:** **React / Next.js**[cite: 23, 59, 96, 133].

* **Backend (Capa de Lógica de Negocio):**
    * **Descripción:** Actúa como el orquestador principal. [cite_start]Gestiona la lógica para dividir las cuentas, las validaciones y la comunicación entre el frontend y la API de pagos[cite: 24, 70, 97, 146].
    * [cite_start]**Tecnología:** **Node.js / Express**[cite: 24, 53, 97, 127].

* **Capa de Pagos:**
    * [cite_start]**Descripción:** Se encarga de toda la interacción con la red de pagos, incluyendo la creación de solicitudes de pago (`incoming payments`), cotizaciones (`quotes`) y la ejecución de los pagos salientes (`outgoing payments`)[cite: 28, 71, 103, 147].
    * [cite_start]**Tecnología:** **Open Payments API**[cite: 28, 57, 103, 131].

---

## ✅ Funciones Indispensables

* [cite_start]**Creación de Grupos de Pago:** Permitir a un usuario crear un grupo, definir un monto total y agregar participantes[cite: 13, 86].
* [cite_start]**Asignación de Montos:** Dividir el total entre los miembros del grupo para definir la aportación de cada uno[cite: 13, 86].
* [cite_start]**Generación de Enlaces de Pago:** Crear un enlace único y seguro para cada participante[cite: 13, 86].
* [cite_start]**Monitoreo de Progreso:** Visualizar en tiempo real qué participantes ya han completado su pago[cite: 18, 23, 91, 96].
* [cite_start]**Transferencia Final:** Liberar el pago total al destinatario una vez que todas las contribuciones hayan sido confirmadas[cite: 14, 87].

---

## 👥 Equipo y Responsabilidades

* [cite_start]**Erick Daniel García Rodríguez:** Líder de Producto (Product Owner) y Backend Engineer (Node.js / Open Payments)[cite: 46, 47, 48, 121, 122].
* [cite_start]**Dilan Alexander Cruz Reséndiz:** Backend Engineer (Node.js / Open Payments)[cite: 51, 125].
* [cite_start]**Fernanda Rodríguez Ramírez:** Frontend Engineer (React / UX)[cite: 49, 123].
* [cite_start]**Nayeli Rubí Álvarez Gijón:** Frontend Engineer (React / UX)[cite: 50, 124].