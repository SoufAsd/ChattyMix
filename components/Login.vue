<template lang="">
  <NSpace justify="center">
    <NImage
      width="200"
      src="/img/logo.png"
      class="logo white"
      preview-disabled
    />
    <NForm ref="formRef" :model="LoginRef" :rules="rules">
      <NSpace vertical justify="center">
        <NFormItem label="Email" path="email">
          <NAutoComplete
            v-model:value="LoginRef.email"
            :input-props="{
              autocomplete: 'disabled',
            }"
            :options="options"
            placeholder="Email"
            clearable
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
          <NSpace justify="center">
            <NButton class="button" @click="handleValidateClick"
              >Sign in</NButton
            >
          </NSpace>
        </NFormItem>
      </NSpace>
    </NForm>
  </NSpace>
</template>
<script lang="ts" setup>
import { FormInst, useMessage, FormRules } from "naive-ui";

interface LoginType {
  email: string | null;
  password: string | null;
}

const { signIn,status } = useSession();

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
      signIn("credentials", {
        email: LoginRef.value.email,
        password: LoginRef.value.password,
      });
      message.success("Valid");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
}
</script>
<style lang=""></style>
