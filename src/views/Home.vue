<template>
  <div>
    <div class="test-box" @click="screenfull">
      11
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useFullscreen } from "@vueuse/core"
export default {
  name: 'Home',
  setup () {
    const { isFullscreen, toggle } = useFullscreen()
    const screenfull = () => {
      toggle()
    }
    return {
      screenfull
    }
  }
}
</script>
<style lang="scss" scoped>
.test-box {
  width: 1rem;
  height: 1rem;
  border: 1px solid red;
  box-sizing: border-box;
  margin: 0 auto;
  font-size: 0.2rem;
}
</style>
