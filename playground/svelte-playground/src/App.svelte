<script lang="ts">
  import './App.css';
  import * as icons from "../../../packages/kivex-svelte/dist/index.js";
  const iconData = Object.entries(icons);
</script>

<main>
  <h2>All icons ({iconData.length}) for kivex-svelte</h2>
  
  <div class="icons">
    {#each iconData as [name, Icon]}
      <div class="icon">
        <svelte:component this={Icon} />
        <p>{name}</p>
      </div>
    {/each}
  </div>
</main>

<style>
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