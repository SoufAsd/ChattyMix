<template lang="">
  <div class="side">
        <NGrid :cols="4" item-responsive responsive="screen">
          <NGi>
            <div class="servers">
              <ServersMain></ServersMain>
            </div>
          </NGi>
          <NGi :span="3">
            <div class="sections"></div>
            <div class="audio"></div>
          </NGi>
        </NGrid>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
@import "@/assets/sass/pages/left-side.sass";
</style>
