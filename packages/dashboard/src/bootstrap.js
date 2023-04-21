import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

// mount function to start the app

const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
}

// if we ware in development and in isolation, call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dashboard-dev-root')
  if (devRoot) mount(devRoot)
}

// If we're running our app through container, then export mount
export { mount }
