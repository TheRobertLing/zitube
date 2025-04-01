<script setup lang="ts">
import { Toolbar, Button, IconField, InputIcon, InputText } from 'primevue'
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const focusDiv = useTemplateRef('focusHere')
const userSearch = ref<string>('')
const showMobileSearch = ref<boolean>(false)
const router = useRouter()

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

const handleSearch = (e: KeyboardEvent): void => {
  if (e.key === 'Enter') {
    router.push({ name: 'search', query: { search: userSearch.value } })
    console.log(e)
    if (focusDiv.value) {
      console.log('This worked')
      focusDiv.value.focus()
    }
  }
}

const handleClick = (): void => {
  router.push({ name: 'search', query: { search: userSearch.value } })
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <!-- Hidden div to fix focus issue  -->
  <div ref="focusHere" tabindex="0" class="absolute w-0 h-0 opacity-0 overflow-hidden"></div>

  <Toolbar v-show="!showMobileSearch" pt:center="grow justify-center" pt:root="sticky top-0 z-10">
    <template #start>
      <RouterLink to="/" class="w-full"><Button label="ZiTube" variant="text"></Button></RouterLink>
    </template>

    <template #center>
      <IconField pt:root="hidden md:block max-w-2xl grow">
        <InputIcon class="pi pi-search hover:cursor-pointer" :onclick="handleClick" />
        <InputText v-model="userSearch" placeholder="Search" fluid :onKeydown="handleSearch" />
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
        <InputIcon class="pi pi-search hover:cursor-pointer" :onclick="handleClick" />
        <InputText v-model="userSearch" placeholder="Search" fluid :onKeydown="handleSearch" />
      </IconField>
    </template>
  </Toolbar>
</template>

<style scoped></style>
