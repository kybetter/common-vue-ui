<template>
  <div class="test-wrapper">
    <div class="test-list">
      <div class="test-item" v-for="i in 10" :key="i">{{ i }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {};
  }
};
</script>
