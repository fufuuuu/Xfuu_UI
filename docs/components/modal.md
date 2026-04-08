# Modal 弹窗

模态对话框，在浮层中显示，引导用户进行相关操作。

## 基础用法

最简单的弹窗用法。

```vue
<template>
  <button @click="visible = true">打开弹窗</button>
  <XfuuModal v-model:visible="visible" title="标题">
    <p>弹窗内容</p>
  </XfuuModal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```

## 自定义底部按钮

使用 `footer` 插槽自定义底部内容。

```vue
<template>
  <button @click="visible = true">打开弹窗</button>
  <XfuuModal v-model:visible="visible" title="提示">
    <p>此操作将永久删除该文件, 是否继续?</p>
    <template #footer>
      <button @click="visible = false">取消</button>
      <button @click="handleConfirm">确定</button>
    </template>
  </XfuuModal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const handleConfirm = () => {
  alert('已确认')
  visible.value = false
}
</script>
```

## 禁用遮罩层关闭

设置 `maskClosable` 为 `false` 禁用点击遮罩层关闭弹窗。

```vue
<template>
  <button @click="visible = true">打开弹窗</button>
  <XfuuModal v-model:visible="visible" title="标题" :maskClosable="false">
    <p>点击遮罩层无法关闭弹窗，请点击右上角关闭按钮</p>
  </XfuuModal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```

## 隐藏关闭按钮

设置 `closable` 为 `false` 隐藏右上角关闭按钮。

```vue
<template>
  <button @click="visible = true">打开弹窗</button>
  <XfuuModal v-model:visible="visible" title="标题" :closable="false">
    <p>右上角没有关闭按钮，必须点击底部按钮关闭</p>
    <template #footer>
      <button @click="visible = false">我知道了</button>
    </template>
  </XfuuModal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```

## API

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| visible | 是否显示弹窗，支持 v-model:visible | boolean | — | false |
| title | 弹窗标题 | string | — | — |
| closable | 是否显示关闭按钮 | boolean | — | true |
| maskClosable | 点击遮罩层是否可以关闭 | boolean | — | true |

### Events

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| close | 弹窗关闭时触发 | — |

### Slots

| 插槽名 | 说明 |
| ---- | ---- |
| default | 弹窗内容 |
| footer | 弹窗底部内容 |
