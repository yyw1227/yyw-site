<template>
  <div>
    <div
      class="test-box"
      @click="screenfull"
    ></div>
    <img
      src="/static/test/avater-1.jpg"
      alt=""
      class="test-img"
    >
    <el-row>
      <el-button @click="open2">Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <div>
      {{isFullscreen?'全屏':'非全屏'}}
      <div style="font-size: 20px;">
        <el-icon>
          <i-chat-round />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useFullscreen } from "@vueuse/core"
import { ElMessage } from 'element-plus'
export default {
  name: 'Home',
  setup() {
    const { isFullscreen, toggle } = useFullscreen()
    const screenfull = () => {
      toggle()
    }
    const open2 = () => {
      ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    }
    return {
      screenfull,
      open2,
      isFullscreen
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.test-img {
  width: 2rem;
}
</style>
