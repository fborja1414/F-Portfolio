<template>
  <div>
    <div>{{ projects.name }}</div>
    <div>{{ projects.medium }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, route }) {
    const projects = await $axios.$get(
      `https://agile-peak-21162.herokuapp.com/projects/${route.params.test}`
    );
    const slug = route.params.test;
    console.log(route.params.test);
    return { projects };
  },
};
</script>
