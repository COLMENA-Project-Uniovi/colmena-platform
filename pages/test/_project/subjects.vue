<template>
  <div>
    {{ project }}
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      project: this.$route.params.project,
    }
  },
}
</script>
