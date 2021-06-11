<template>
  <div class="section-container">
    <div v-for="(items, index) in entry" :key="index">
      {{ items }} : {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    entry: Object
  }
};
</script>

<style lang="scss" scoped></style>
