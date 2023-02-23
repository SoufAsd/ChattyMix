<template lang="">
  <NScrollbar>
    <div class="servers-bar">
      <NSpace vertical>
        <NTooltip
          v-for="(server, index) in servers"
          :key="index"
          placement="right"
          trigger="hover"
          content-style="font-weight: bold;"
        >
          <template #trigger>
            <NAvatar class="server-icon" round size="medium" :src="server.img">
            </NAvatar>
          </template>
          {{ server.name }}
        </NTooltip>
        <NTooltip
          placement="right"
          trigger="hover"
          content-style="font-weight: bold;"
        >
          <template #trigger>
            <NAvatar
              @click="newServer = true"
              class="server-icon add-server"
              round
              size="medium"
              src="/img/plus.png"
            >
            </NAvatar>
          </template>
          Add new server
        </NTooltip>
      </NSpace>
    </div>
  </NScrollbar>
  <NModal
    v-model:show="newServer"
    class="new-server-card"
    preset="card"
    title="Create Server"
    :bordered="false"
    style="width: 600px; background: #1a477a"
    size="medium"
  >
    <NSpace justify="center">
      <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        list-type="image-card"
        :max="1"
        @finish="handleFinish"
        @preview="handlePreview"
      />
    </NSpace>
    <NInput v-model:value="serverName" placeholder="Server name"></NInput>
    <template #footer>
      <NButton @click="createServer">Create</NButton>
    </template>
  </NModal>
</template>
<script lang="ts" setup>
import { Plus } from "@vicons/fa";
import type { UploadFileInfo } from "naive-ui";

const newServer = ref(false);
const serverName = ref<String>("");
const serverImage = ref<String | null>();
const servers = ref<Object[]>([]);

const createServer = (e: Event) => {
  servers.value.push({ name: serverName.value,img: serverImage.value});
};

const handleFinish = ({
  file,
}: {
  file: UploadFileInfo;
}) => {
  console.log(file)
  serverImage.value = file.fullPath
};

const handlePreview = (file:UploadFileInfo) => {
  const { url } = file
  console.log(url)
}
</script>
<style lang=""></style>
