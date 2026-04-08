import Modal from './Modal'

const components = [
  Modal
]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Modal,
  install
}

export default {
  install
}
