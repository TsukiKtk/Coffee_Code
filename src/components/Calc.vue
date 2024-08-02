<template>
    <div>
        <h1>Calculo</h1>

        <input v-model.number="nm1" type="number" placeholder="Número 1">
        <input v-model.number="nm2" type="number" placeholder="Número 2">
        <button @click="createCalc">Calcular</button>

        <h2 v-if="resultado !== null">Resultado: {{ resultado }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createCalc as createCalcApi } from "../backend/back_calc/use";

export default defineComponent({
    setup() {
        const nm1 = ref<number | null>(null);
        const nm2 = ref<number | null>(null);
        const resultado = ref<number | null>(null);

        const createCalc = async () => {
            if (nm1.value !== null && nm2.value !== null) {
                try {
                    resultado.value = await createCalcApi(nm1.value, nm2.value);
                    
                } catch (error) {
                    console.error('Erro ao calcular: ', error);
                }
            } else {
                console.warn('Número 1 e Número 2 são necessários');
            }
        }

        return {
            nm1,
            nm2,
            resultado,
            createCalc
        }
    }
})
</script>
