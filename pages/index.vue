<template>
  <NSpace vertical>
    <NGrid :cols="5" layout-shift-disabled>
      <NGi>
        <HomeLeftBar></HomeLeftBar>
      </NGi>
      <NGi :span="3">
        <HomeCenterBar></HomeCenterBar>
      </NGi>
      <NGi>
      <HomeRightBar></HomeRightBar>  
      </NGi>
    </NGrid>
  </NSpace>
</template>
<script lang="ts" setup>
import { NGrid, NGi, NCard, NButton } from "naive-ui";

// definePageMeta({ middleware: "auth" });
</script>
<style lang="scss">
@import '@/assets/sass/main.sass'
</style>
