<template>
  <div class="background">
    <NCard class="login-form">
      <Login v-if="switcher"></Login>
      <Register v-else></Register>
      <template #footer>
        <NSpace justify="center">
          <NButton >Forgot Password</NButton>
          <NButton @click="handleSwitcherLoginRegister"
            >{{switcherLabel}}</NButton
          >
        </NSpace>
      </template>
    </NCard>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ auth: false });

const switcher = ref(true);
const switcherLabel = ref('Register');

const handleSwitcherLoginRegister = (e: Event) => {
  switcher.value = !switcher.value;
  switcher.value ? switcherLabel.value='Register' : switcherLabel.value='Login'
};
</script>
<style lang="scss">
@import "@/assets/sass/pages/login-register.sass";
</style>
