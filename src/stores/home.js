import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const name = ref('Fang')
  const setName = () => {
    name.value = 'Hwa'
  }

  return {
    name,
    setName,
  }
})
