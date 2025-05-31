export class Cita {
    constructor(paciente, doctor, fecha) {
        this.paciente = paciente;
        this.doctor = doctor;
        this.fecha = fecha;
    }
}

export class CitaFactory {
    crearCita(paciente, doctor, fecha) {
        return new Cita(paciente, doctor, fecha);
    }
}
