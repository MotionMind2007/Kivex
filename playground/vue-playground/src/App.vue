<script setup lang="ts">
import * as icons from "../../../packages/kivex-vue/dist/index.js";

const iconData = Object.entries(icons);
</script>

<template>
  <main>
    <h2>All icons ({{ iconData.length }}) for kivex-vue</h2>
    
    <div class="icons">
      <div v-for="[name, Icon] in iconData" :key="name" class="icon">
        <component :is="Icon" />
        <p>{{ name }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.icons {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.icon {
  border: 1px solid black;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
}
</style>