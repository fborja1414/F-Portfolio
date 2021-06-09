<template>
  <div>
    <div v-for="(entry, index) in projects" :key="index">
      <div v-for="(items, index) in entry" :key="index">
        {{ items }} : {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const projects = await $axios.$get("http://localhost:1337/projects");
    console.log({ projects });
    return { projects };
  }
};
</script>

<style></style>
