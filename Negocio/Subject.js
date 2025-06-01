export class Subject {
    constructor() {
        this.observadores = [];
    }
    registrarObservador(obs) {
        this.observadores.push(obs);
    }
    notificar(cita) {
        this.observadores.forEach(obs => obs.actualizar(cita));
    }
}
