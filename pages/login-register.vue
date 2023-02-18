<template>
  <div class="background">
    <NCard class="login-form">
      <NButton class="switcher">Register</NButton>
      <Login></Login>
    </NCard>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ auth: false });
</script>
<style lang="scss">
@import "@/assets/sass/pages/login-register.sass";
</style>
