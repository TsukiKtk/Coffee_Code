// initialize.ts
export class Calc {
    private nm1: number;
    private nm2: number;

    constructor(nm1: number, nm2: number) {
        this.nm1 = nm1;
        this.nm2 = nm2;
    }

    // Exemplo de método para somar os dois números
    getSum(): number {
        return this.nm1 + this.nm2;
    }
}
