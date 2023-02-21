<template lang="">
  <NSpace justify="center">
    <NImage
      width="200"
      src="/img/logo.png"
      class="logo white"
      preview-disabled
    />
    <NForm ref="formRef" :model="registerRef" :rules="rules">
      <NSpace vertical justify="center">
        <NFormItem label="Email" path="email">
          <NAutoComplete
            v-model:value="registerRef.email"
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
            v-model:value="registerRef.password"
            placeholder="Password"
            @input="handlePasswordInput"
          />
        </NFormItem>
        <NFormItem
          ref="rPasswordFormItemRef"
          first
          path="confirmPassword"
          label="Re-enter Password"
        >
          <NInput
            type="password"
            :disabled="!registerRef.password"
            v-model:value="registerRef.confirmPassword"
            @keydown.enter.prevent
          />
        </NFormItem>
        <NFormItem>
          <NSpace justify="center">
            <NButton class="button" @click="handleValidateButtonClick">Sign up</NButton>
          </NSpace>
        </NFormItem>
      </NSpace>
    </NForm>
  </NSpace>
</template>
<script lang="ts" setup>
import {
  FormInst,
  useMessage,
  FormRules,
  FormItemRule,
  FormItemInst,
  FormValidationError
} from "naive-ui";

interface RegisterType {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}
const { signIn, status } = useSession();

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const registerRef = ref<RegisterType>({
  email: null,
  password: null,
  confirmPassword: null,
});

const value = ref("");
const formValue = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const options = computed(() => {
  return ["@gmail.com", "@cloud.com", "@outlook.com"].map((suffix) => {
    const prefix = registerRef.value.email?.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});

function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === registerRef.value.password;
}

const message = useMessage();
const rules: FormRules = {
  password: [
    {
      required: true,
      message: "Password is required",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Password is required",
    },
    {
      validator: validatePasswordSame,
      message: "Password is not same as re-entered password!",
      trigger: ["blur", "password-input"],
    },
  ],
  email: [
    {
      required: true,
      message: "Email is required",
    },
  ],
};

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors : Array<FormValidationError>| undefined) => {
    if (!errors) {
      signIn("credentials", {
        email: registerRef.value.email,
        password: registerRef.value.password,
        confirmPassword: registerRef.value.confirmPassword,
      });
      message.success("Valid");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
}

function handlePasswordInput() {
  if (registerRef.value.confirmPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
}
</script>
<style lang=""></style>
