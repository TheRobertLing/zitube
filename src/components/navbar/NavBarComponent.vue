<script setup lang="ts">
import { Toolbar, Button, IconField, InputIcon, InputText } from 'primevue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const userSearch = ref<string>('')
const showMobileSearch = ref<boolean>(false)

const openMobileSearch = (): void => {
  showMobileSearch.value = true
}
const closeMobileSearch = (): void => {
  showMobileSearch.value = false
}

const handleResize = (): void => {
  if (window.innerWidth >= 640) {
    showMobileSearch.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <Toolbar v-show="!showMobileSearch" pt:center="grow justify-center" pt:root="sticky top-0 z-10">
    <template #start>
      <Button label="ZiTube" variant="text"></Button>
    </template>

    <template #center>
      <IconField pt:root="hidden md:block max-w-2xl grow">
        <InputIcon class="pi pi-search" />
        <InputText v-model="userSearch" placeholder="Search" variant="filled" fluid />
      </IconField>
    </template>

    <template #end>
      <Button
        pt:root="md:!hidden"
        icon="pi pi-search"
        variant="text"
        rounded
        aria-label="Search"
        @click="openMobileSearch"
        severity="secondary"
      >
      </Button>
      <Button label="Log In" variant="text" severity="secondary"></Button>
      <Button label="Sign Up" variant="text" severity="secondary"></Button>
    </template>
  </Toolbar>

  <Toolbar v-show="showMobileSearch" pt:center="grow justify-center">
    <template #start>
      <Button icon="pi pi-arrow-left" variant="text" rounded @click="closeMobileSearch"></Button>
    </template>

    <template #center>
      <IconField pt:root="grow">
        <InputIcon class="pi pi-search" />
        <InputText v-model="userSearch" placeholder="Search" variant="filled" fluid />
      </IconField>
    </template>
  </Toolbar>
</template>

<style scoped></style>
