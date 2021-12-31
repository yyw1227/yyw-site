import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'

import * as ElIconModules from '@element-plus/icons-vue'
// 导入转换图标名称的函数
import { transElIconName } from '@/common/util.js'


const app = createApp(App)
// 统一注册el-icon图标
for (let iconName in ElIconModules) {
  app.component(transElIconName(iconName), ElIconModules[iconName])
}
app.use(store).use(router).mount('#app')
