<template lang="">
  <NModal
    v-model:show="props.newServer"
    class="new-server-card"
    preset="card"
    title="Create Server"
    :bordered="false"
    style="width: 600px; background: #1a477a"
    size="medium"
  >
    <n-upload
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      list-type="image-card"
    >
      Click to Upload
    </n-upload>
    <NInput placeholder="Server name"></NInput>
    <template #footer> Footer </template>
  </NModal>
</template>
<script lang="ts" setup>
const props = defineProps({
    newServer: Boolean
})

</script>
<style lang=""></style>
