<template>
  <div class="section-container" :class="position">
    <div class="items" v-for="(items, match) in entry" :key="match">
      {{ items }} : {{ match }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    entry: Object,
    index: Number,
  },

  computed: {
    position: function () {
      return this.entry.position;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-container {
  grid-column: 7/13;
}

.items {
  display: block;
}
</style>
