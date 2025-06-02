# 🏥 Sistema de Reservas de Citas Médicas - Arquitectura de 3 Capas

Este proyecto implementa un sistema de gestión de citas médicas utilizando una **arquitectura de 3 capas**, aplicando **principios SOLID** y tres tipos de **patrones de diseño**: **creacional, estructural y de comportamiento**. Desarrollado en **JavaScript (Node.js)** y ejecutado por terminal.

---

## ✅ Resumen del Caso de Uso

**Caso de uso:** Sistema de reservas de citas médicas.  
**Funcionalidades principales:**
- Crear una cita entre paciente y doctor.
- Agendar la cita mediante un servicio básico.
- Añadir recordatorios personalizados (Decorator).
- Notificar por email y SMS (Observer).
- Guardar la cita simuladamente en base de datos.

---

## 🛠️ Tecnologías Usadas

- **Lenguaje:** JavaScript (ESModules)
- **Entorno:** Node.js
- **Patrones de diseño:**  
  - Factory Method (creacional)  
  - Decorator (estructural)  
  - Observer (comportamiento)
- **Principios:** SOLID
- **Arquitectura:** 3 capas (Presentación, Negocio, Datos)

---

## 🗂️ Estructura del Proyecto

```
📁 datos/
    └── DB.js
📁 negocio/
    ├── CitaFactory.js
    ├── EmailObserver.js
    ├── ServicioBasico.js
    ├── ServicioConRecordatorio.js
    ├── SMSObserver.js
    └── Subject.js
📁 presentacion/
    └── main.js
📄 package.json
```

---

## ▶️ Cómo Ejecutar el Proyecto

### Prerrequisitos:
- Tener instalado [Node.js](https://nodejs.org)

### Pasos:
```bash
git clone https://github.com/MelanyRocha/SistemaDeCitasMedicas_ArquitecturaDe3Capas.git
cd SistemaDeCitasMedicas_ArquitecturaDe3Capas
npm install
npm start
```

### Salida esperada:
- Se agenda una cita con mensaje de confirmación.
- Se imprime un recordatorio adicional.
- Se notifican los observadores (correo y SMS).
- Se simula el guardado en base de datos.

---

## 🧠 Patrones de Diseño Aplicados

| Tipo          | Clase                             | Descripción |
|---------------|-----------------------------------|-------------|
| Creacional    | `CitaFactory`                     | Crea objetos `Cita` de forma centralizada. |
| Estructural   | `ServicioConRecordatorio`         | Añade funcionalidad a `ServicioBasico` sin modificarlo. |
| Comportamiento| `Subject`, `EmailObserver`, `SMSObserver` | Observadores que reaccionan a la creación de una cita. |

---

## 📌 Principios SOLID Aplicados

| Principio | Aplicación |
|----------|------------|
| **S** - SRP | Cada clase tiene una responsabilidad clara. |
| **O** - OCP | Decorators extienden sin modificar. |
| **L** - LSP | Decorators sustituyen a clases base. |
| **I** - ISP | Observadores implementan solo lo necesario. |
| **D** - DIP | `Subject` no depende de observadores concretos. |

---

## 📄 Código fuente organizado por capas

### `📁 datos/DB.js`
Simula la persistencia de las citas.

### `📁 negocio/*`
Contiene la lógica: creación de citas, agendamiento decorado, notificación mediante observers.

### `📁 presentacion/main.js`
Simula la interacción del usuario: orquesta creación, notificación y almacenamiento.

---

## 📷 Captura de Arquitectura (simulada)

_Estructura representada en carpetas y dependencias entre módulos, mostrando capas independientes._

---

## 🙋‍♀️ Desarrollado por

**Melany Rocha Ferrufino**  
📁 [Repositorio en GitHub](https://github.com/MelanyRocha/SistemaDeCitasMedicas_ArquitecturaDe3Capas)