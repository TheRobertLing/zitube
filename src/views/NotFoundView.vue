<script setup lang="ts">
import { Button, Card } from 'primevue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full min-h-[calc(100vh-68px)] flex justify-center items-center">
    <Card style="width: 25rem; overflow: hidden" pt:title="text-center">
      <template #header>
        <img alt="Page Not Found" src="@/assets/PageNotFound.gif" class="w-full" />
      </template>
      <template #title>Page Not Found!</template>
      <template #content>
        <p class="m-0 text-center">
          Oops, it seems like this page is missing. This is most likely due to the URL being
          incorrect or if the page is still undergoing maintenance. Apologies for any inconvenience
          caused.
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <RouterLink to="/" class="w-full">
            <Button label="Return to Feed" severity="primary" outlined class="w-full"> </Button>
          </RouterLink>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
