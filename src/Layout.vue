<script setup lang="ts">

const initIcon = '#M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h18ZM8.5 15h-1a1 1 0 0 0-.117 1.993L7.5 17h1a1 1 0 0 0 .117-1.993L8.5 15Zm4 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm-4-4h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm4 0h-1a1 1 0 0 0-.117 1.993L11.5 13h1a1 1 0 0 0 .117-1.993L12.5 11Zm4 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2ZM19 3a2 2 0 0 1 2 2v1H3V5a2 2 0 0 1 2-2h14Z'

const initColor = '#000000'
const initSize = 16
const initFillRule = 'evenodd'

defineProps({
  icon: String,
  color: String,
  size: [String, Number],
  fillRule: String
})

</script>

<template>
  <svg
    :width="`${size ? size : initSize}px`"
    :height="`${size ? size : initSize}px`"
    viewBox="0 0 24 24"
    :fill='color ? color : initColor'
    :fill-rule="fillRule ? fillRule : initFillRule"
  >
    <path :d="icon ? icon : initIcon"></path>
  </svg>
</template>