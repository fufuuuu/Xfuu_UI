<template>
  <Teleport to="body">
    <Transition name="xfuu-modal-fade">
      <div v-if="visible" class="xfuu-modal-overlay" @click="handleOverlayClick">
        <Transition name="xfuu-modal-zoom">
          <div v-show="visible" class="xfuu-modal" @click.stop>
            <div class="xfuu-modal-header">
              <span class="xfuu-modal-title">{{ title }}</span>
              <button v-if="closable" class="xfuu-modal-close" @click="handleClose">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div class="xfuu-modal-body">
              <slot />
            </div>
            <div v-if="$slots.footer" class="xfuu-modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'XfuuModal'
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:visible', 'close'])

const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.maskClosable) {
    handleClose()
  }
}
</script>

<style scoped>
.xfuu-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.xfuu-modal {
  background: #fff;
  border-radius: 8px;
  min-width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.xfuu-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
}

.xfuu-modal-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.xfuu-modal-close {
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.2s;
}

.xfuu-modal-close:hover {
  color: #666;
}

.xfuu-modal-body {
  padding: 24px;
  color: #666;
  line-height: 1.6;
}

.xfuu-modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.xfuu-modal-fade-enter-active,
.xfuu-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.xfuu-modal-fade-enter-from,
.xfuu-modal-fade-leave-to {
  opacity: 0;
}

.xfuu-modal-zoom-enter-active,
.xfuu-modal-zoom-leave-active {
  transition: transform 0.3s ease;
}

.xfuu-modal-zoom-enter-from,
.xfuu-modal-zoom-leave-to {
  transform: scale(0.9);
}
</style>
