<script setup lang="ts">
import Toolbar from '@/volt/Toolbar.vue'
import Button from '@/volt/Button.vue'
import SecondaryButton from '@/volt/SecondaryButton.vue'
import InputText from '@/volt/InputText.vue'
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
  <Toolbar v-show="!showMobileSearch" pt:center="grow justify-center" pt:root="sticky top-0">
    <template #start>
      <Button label="ZiTube" variant="text"></Button>
    </template>

    <template #center>
      <div class="relative hidden sm:block max-w-4xl grow">
        <i
          class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1"
        ></i>
        <InputText
          type="text"
          v-model="userSearch"
          variant="filled"
          placeholder="Search"
          pt:root="ps-10 w-full"
        />
      </div>
    </template>

    <template #end>
      <SecondaryButton
        icon="pi pi-search"
        variant="text"
        rounded
        pt:root="sm:hidden"
        @click="openMobileSearch"
      />
      <SecondaryButton label="Log In" variant="text" />
      <SecondaryButton label="Sign Up" variant="text" />
    </template>
  </Toolbar>
  <Toolbar v-show="showMobileSearch" pt:center="grow justify-center">
    <template #start>
      <SecondaryButton
        icon="pi pi-arrow-left"
        variant="text"
        rounded
        @click="closeMobileSearch"
      />
    </template>

    <template #center>
      <div class="relative max-w-4xl grow">
        <i
          class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1"
        ></i>
        <InputText
          type="text"
          v-model="userSearch"
          variant="filled"
          placeholder="Search"
          pt:root="ps-10 w-full"
        />
      </div>
    </template>
  </Toolbar>
</template>

<style scoped></style>
