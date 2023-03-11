<template>
  <div class="font-bold text-red-500">Hello</div>
  <p>{{counter}}</p>
  <button @click="increaseCounter">Increase</button>
</template>

<script lang="ts" setup>
definePageMeta({
    layout:'default'
})
import {useIndexStore} from "@/store/index";
import {storeToRefs} from 'pinia'
const indexStore = useIndexStore()
const {increaseCounter} = indexStore
const {counter} = storeToRefs(indexStore)
</script>

<style>

</style>