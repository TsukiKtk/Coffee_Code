import { Calc } from "./initialize";

class Calcs {
    createCalc(nm1: number, nm2: number): number {
        const calc = new Calc(nm1, nm2);
        return calc.getSum(); // Usa o método da classe Calc para obter o resultado
    }
}

// Cria uma instância da classe Calcs
const calcInstance = new Calcs();

// Expose a função para uso externo
export const createCalc = (nm1: number, nm2: number): number => {
    return calcInstance.createCalc(nm1, nm2);
};
