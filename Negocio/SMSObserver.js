export class SMSObserver {
    actualizar(cita) {
        console.log(`SMS enviado a ${cita.paciente} confirmando cita con ${cita.doctor} el ${cita.fecha}`);
    }
}
