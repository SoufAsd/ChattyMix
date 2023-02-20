<template lang="">
  <NSpace justify="center">
    <NImage
      width="200"
      src="/img/logo.png"
      class="logo white"
      preview-disabled
    />
    <NForm ref="formRef">
      <NSpace vertical justify="center">
        <NFormItem label="Email" path="email">
          <NAutoComplete
            :input-props="{
              autocomplete: 'disabled',
            }"
            placeholder="Email"
            clearable
          />
        </NFormItem>
        <NFormItem label="Password" path="password">
          <NInput
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
          />
        </NFormItem>
        <NFormItem
          ref="rPasswordFormItemRef"
          first
          path="reenteredPassword"
          label="Re-enter Password"
        >
          <NInput
            type="password"
            @keydown.enter.prevent
          />
        </NFormItem>
        <NFormItem>
          <NSpace justify="center">
            <NButton class="button">Sign up</NButton>
          </NSpace>
        </NFormItem>
      </NSpace>
    </NForm>
  </NSpace>
</template>
<script lang="ts" setup></script>
<style lang=""></style>
