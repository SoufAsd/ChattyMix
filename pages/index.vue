<template>
  <NGrid :x-gap="12" :y-gap="12" :cols="4" layout-shift-disabled>
    <NGi> </NGi>
    <NGi :span="2"> </NGi>
    <NGi> </NGi>
  </NGrid>
</template>
<script lang="ts" setup>
import { NGrid, NGi, NCard, NButton } from "naive-ui";

// definePageMeta({ middleware: "auth" });
</script>
