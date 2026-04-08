import Modal from './src/Modal.vue'

Modal.install = (app) => {
  app.component(Modal.name, Modal)
}

export default Modal
