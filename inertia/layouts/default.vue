<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <Link href="/">
          <LogoPro class="w-auto h-6 shrink-0" />
        </Link>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton to="https://github.com/nuxt-ui-pro/starter-adonis" target="_blank" icon="simple-icons:github" aria-label="GitHub" color="neutral" variant="ghost" />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <USeparator icon="simple-icons:adonisjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton to="https://github.com/nuxt-ui-pro/starter-adonis" target="_blank" icon="simple-icons:github" aria-label="GitHub" color="neutral" variant="ghost" />
      </template>
    </UFooter>
  </UApp>
</template>
