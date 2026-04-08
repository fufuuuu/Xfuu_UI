import { createApp } from 'vue'
import App from './App.vue'
import XfuuUI from './components'

const app = createApp(App)
app.use(XfuuUI)
app.mount('#app')
