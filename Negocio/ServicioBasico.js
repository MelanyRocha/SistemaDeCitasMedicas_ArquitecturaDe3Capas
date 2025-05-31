export class ServicioBasico {
    agendar(cita) {
        console.log(`Cita agendada para ${cita.paciente} con ${cita.doctor} el ${cita.fecha}`);
    }
}
