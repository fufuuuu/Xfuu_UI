<template>
  <div class="app">
    <h1>Xfuu UI</h1>
    <div class="demo-section">
      <h2>Modal 弹窗组件演示</h2>
      <button class="btn" @click="openModal">打开弹窗</button>
    </div>

    <XfuuModal v-model:visible="modalVisible" title="弹窗标题">
      <p>这是弹窗的内容区域</p>
      <p>Modal 组件支持自定义标题、内容和底部按钮</p>
      <template #footer>
        <button class="btn btn-secondary" @click="modalVisible = false">取消</button>
        <button class="btn btn-primary" @click="confirm">确定</button>
      </template>
    </XfuuModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalVisible = ref(false)

const openModal = () => {
  modalVisible.value = true
}

const confirm = () => {
  alert('点击了确定')
  modalVisible.value = false
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.app {
  padding: 40px;
}

h1 {
  margin-bottom: 30px;
  color: #333;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-section h2 {
  margin-bottom: 16px;
  font-size: 18px;
  color: #666;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.btn-primary {
  background: #1890ff;
  color: #fff;
}

.btn-primary:hover {
  background: #40a9ff;
}

.btn-secondary {
  background: #fff;
  border: 1px solid #d9d9d9;
  color: #666;
}

.btn-secondary:hover {
  border-color: #1890ff;
  color: #1890ff;
}
</style>
