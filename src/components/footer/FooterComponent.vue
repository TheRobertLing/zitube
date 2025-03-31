<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
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
            <Button label="About" variant="text" severity="secondary"> </Button>
          </li>
          <li>
            <Button label="Contact" variant="text" severity="secondary"> </Button>
          </li>
          <li>
            <a href="https://github.com/TheRobertLing/zitube" target="_blank">
              <Button label="Github" variant="text" severity="secondary"> </Button>
            </a>
          </li>
        </ul>
      </template>
    </Toolbar>
  </footer>
</template>

<style scoped></style>
