import { CitaFactory } from "../Negocio/CitaFactory.js";
import { ServicioConRecordatorio } from "../Negocio/ServicioConRecordatorio.js";
import { ServicioBasico } from "../Negocio/ServicioBasico.js";
import { Subject } from "../Negocio/Subject.js";
import { EmailObserver } from "../Negocio/EmailObserver.js";
import { SMSObserver } from "../Negocio/SMSObserver.js";
import { DB } from "../Datos/DB.js";

const factory = new CitaFactory();
const cita = factory.crearCita("Melany Rocha Ferrufino", "Dr. Juan Pérez", "2025-05-12");

const servicio = new ServicioConRecordatorio(new ServicioBasico());
servicio.agendar(cita);

const notificador = new Subject();
notificador.registrarObservador(new EmailObserver());
notificador.registrarObservador(new SMSObserver());
notificador.notificar(cita);

DB.guardarCita(cita);
