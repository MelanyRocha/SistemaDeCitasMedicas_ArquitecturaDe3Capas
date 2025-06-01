export class ServicioConRecordatorio {
    constructor(servicio) {
        this.servicio = servicio;
    }
    agendar(cita) {
        this.servicio.agendar(cita);
        console.log(`Se envió recordatorio adicional para ${cita.paciente}`);
    }
}
