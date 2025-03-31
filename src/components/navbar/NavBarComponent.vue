<script setup lang="ts">
import Toolbar from '@/volt/Toolbar.vue'
import Button from '@/volt/Button.vue'
import SecondaryButton from '@/volt/SecondaryButton.vue'
import InputText from '@/volt/InputText.vue'
import { ref } from 'vue'

const userSearch = ref<string>('')
</script>

<template>
  <Toolbar>
    <template #start>
      <Button label="ZiTube" variant="text" pt:root="text-xl"></Button>
    </template>

    <template #center>
      <!-- Wide screen -->
      <div class="relative hidden sm:block">
        <i
          class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1"
        ></i>
        <InputText
          type="text"
          v-model="userSearch"
          variant="filled"
          placeholder="Search"
          pt:root="ps-10 "
        />
      </div>

      <!-- Mobile Screen -->
      <div>

      </div>
    </template>

    <template #end>
      <SecondaryButton icon="pi pi-search" variant="text" rounded pt:root="sm:hidden" />
      <SecondaryButton label="Log In" variant="text" />
      <SecondaryButton label="Sign Up" variant="text" />
    </template>
  </Toolbar>
</template>

<style scoped></style>
