<template>
  <div class="background">
    <NCard class="login-form">
      <NImage width="200" src="/img/logo.png" preview-disabled />
      <NForm ref="formRef" :model="LoginRef" :rules="rules">
        <NSpace vertical>
          <NFormItem label="Email" path="email">
            <NAutoComplete
              v-model:value="LoginRef.email"
              :input-props="{
                autocomplete: 'disabled',
              }"
              :options="options"
              placeholder="Email"
            />
          </NFormItem>
          <NFormItem label="Password" path="password">
            <NInput
              type="password"
              show-password-on="mousedown"
              v-model:value="LoginRef.password"
              placeholder="Password"
            />
          </NFormItem>
          <NFormItem>
            <NButton type="primary" @click="handleValidateClick"
              >login</NButton
            >
          </NFormItem>
        </NSpace>
      </NForm>
    </NCard>
  </div>
</template>
<script setup lang="ts">
import { FormInst, useMessage, FormRules } from "naive-ui";

definePageMeta({ auth: false });

interface LoginType {
  email: string | null;
  password: string | null;
}

const { signIn } = useSession();

const formRef = ref<FormInst | null>(null);
const LoginRef = ref<LoginType>({
  email: null,
  password: null,
});
const value = ref("");
const formValue = ref({
  email: "",
  password: "",
});
const options = computed(() => {
  return ["@gmail.com", "@cloud.com", "@outlook.com"].map((suffix) => {
    const prefix = LoginRef.value.email?.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});
const message = useMessage();
const rules: FormRules = {
  password: [
    {
      required: true,
      message: "Password is required",
    },
  ],
  email: [
    {
      required: true,
      message: "Email is required",
    },
  ],
};

function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("Valid");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
}
</script>
<style lang="scss">
@import "@/assets/sass/pages/login.sass";
</style>
