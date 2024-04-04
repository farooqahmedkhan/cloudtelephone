<script setup>
import TheCounter from "./TheCounter.vue"
const props = defineProps( {
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "number",
    validator: ( value ) => {
      return ["number", "select", "switch"].includes( value )
    }
  },
  price: {
    type: Number,
    default: 0
  },
  options: {
    type: Array,
    default: []
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: true
  }
} )
</script>

<template>
  <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
    <td class="px-6 py-4">
      <the-counter v-if="type === 'number'" :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)" />
      <form class="max-w-sm mx-auto" v-if="type === 'select'">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select
          an
          option</label>
        <select id="countries" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <!-- <option selected>No</option> -->
          <option v-for="op in options" :key="op.value" :value="op.value">{{ op.title }}</option>
        </select>
      </form>
      <label v-if="type === 'switch'" class="flex items-center relative w-max cursor-pointer select-none">
        <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"
          class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500" />
        <span v-if="!modelValue" class="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
        <span v-else class="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
        <span class="w-7 h-7 absolute rounded-full transform transition-transform bg-gray-200"
          :class="{ 'translate-x-7': modelValue }" />
      </label>
    </td>
    <td class="px-6 py-4">
      <h6>{{ title }}</h6>
    </td>
    <td class="px-6 py-4 text-blue">${{ price }}/user/month</td>
  </tr>
</template>
