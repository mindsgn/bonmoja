<script setup>
import { Motion } from 'motion-v'
</script>

<template>
  <Motion :whileHover="{ scale: 1.1 }"
  :whilePress="{ scale: 0.95 }">
    <Button>Click me</Button>
  </Motion>
</template>
