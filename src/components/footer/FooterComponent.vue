<script setup lang="ts">
import Toolbar from '@/volt/Toolbar.vue'
import SecondaryButton from '@/volt/SecondaryButton.vue'
</script>

<template>
  <footer>
    <Toolbar>
      <template #start>
        <span class="text-sm sm:text-center"
          >© {{ new Date().getFullYear() }} ZiTube. All Rights Reserved.
        </span>
      </template>

      <template #end>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            
            <SecondaryButton label="About" variant="text"> </SecondaryButton>
          </li>
          <li>
            <SecondaryButton label="Contact" variant="text"> </SecondaryButton>
          </li>
          <li>
            <a href="https://github.com/TheRobertLing/zitube" target="_blank">
              <SecondaryButton label="Github" variant="text"> </SecondaryButton>
            </a>
          </li>
        </ul>
      </template>
    </Toolbar>
  </footer>
</template>

<style scoped></style>
