<template>
  <div class="background">
    <NCard title="Login" class="login-form">
      <NForm ref="formRef" :model="formValue">
        <NSpace vertical>
          <NFormItem label="Name" path="user.name">
            <NAutoComplete
              v-model:value="value"
              :input-props="{
                autocomplete: 'disabled',
              }"
              :options="options"
              placeholder="Email"
            />
          </NFormItem>
          <NFormItem label="Name" path="user.name">
            <NInput
              type="password"
              show-password-on="mousedown"
              placeholder="Password"
              :maxlength="8"
            />
          </NFormItem>
          <NFormItem>
            <NButton>login</NButton>
          </NFormItem>
        </NSpace>
      </NForm>
    </NCard>
  </div>
</template>
<script setup lang="ts">
import { FormInst, useMessage } from "naive-ui";

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
  user: {
    name: "",
    age: "",
  },
  phone: "",
});
const options = computed(() => {
  return ["@gmail.com", "@cloud.com", "@outlook.com"].map((suffix) => {
    const prefix = value.value.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});
// const message = useMessage();
// const rules = {
//   user: {
//     name: {
//       required: true,
//       message: "Please input your name",
//       trigger: "blur",
//     },
//     age: {
//       required: true,
//       message: "Please input your age",
//       trigger: ["input", "blur"],
//     },
//   },
//   phone: {
//     required: true,
//     message: "Please input your number",
//     trigger: ["input"],
//   },
// };

// function handleValidateClick(e: MouseEvent) {
//   e.preventDefault();
//   formRef.value?.validate((errors) => {
//     if (!errors) {
//       message.success("Valid");
//     } else {
//       console.log(errors);
//       message.error("Invalid");
//     }
//   });
// }
</script>
<style lang="scss">
@import "@/assets/sass/pages/login.sass";
</style>
