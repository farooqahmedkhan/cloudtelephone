<script setup>
defineProps( {
  modelValue: {
    type: Boolean,
    default: false
  }
} )
</script>


<template>
  <label class="flex items-center relative w-max cursor-pointer select-none">
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"
      class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500" />
    <span v-if="!modelValue" class="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
    <span v-else class="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
    <span class="w-7 h-7 absolute rounded-full transform transition-transform bg-gray-200"
      :class="{ 'translate-x-7': modelValue }" />
  </label>
</template>
