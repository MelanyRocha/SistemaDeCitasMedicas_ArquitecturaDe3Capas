export class DB {
    static guardarCita(cita) {
        console.log(`Cita guardada en base de datos para ${cita.paciente} con ${cita.doctor} el ${cita.fecha}`);
    }
}
