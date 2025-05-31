export class EmailObserver {
    actualizar(cita) {
        console.log(`Correo enviado a ${cita.paciente} confirmando cita con ${cita.doctor} el ${cita.fecha}`);
    }
}
