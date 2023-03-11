import { defineStore } from 'pinia';

export const useIndexStore = defineStore('indexStore', () => {
    const counter = ref(0)
    const increaseCounter = () => {
        counter.value++
    }
    return { counter, increaseCounter };
})