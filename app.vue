<template>
  <div>
    <NConfigProvider :theme="darkTheme" :locale="enUS" :date-locale="dateEnUS">
      <NuxtPage />
    </NConfigProvider>
  </div>
</template>
<style></style>
<script lang="ts" setup>
import { NConfigProvider } from "naive-ui";
import { darkTheme } from 'naive-ui'
import { enUS, dateEnUS } from 'naive-ui'
</script>
