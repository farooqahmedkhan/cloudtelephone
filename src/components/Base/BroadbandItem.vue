<script setup>
defineProps( {
  title: {
    type: String,
    default: ""
  },
  desc: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: Number,
    default: 0
  },
} )
</script>

<template>
  <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
    <tbody>
      <tr class="border border-neutral-200 bg-black/[0.02]  whitespace-nowrap">
        <td class="px-6 py-4" style="white-space: normal;">
          <h6>{{ title }}</h6>
          <p>{{ desc }}</p>
        </td>
        <td class="px-6 py-4">${{ price }}/month</td>
        <td class="px-6 py-4"><input type="number" min="0" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" class="form-control"></td>
      </tr>
    </tbody>
  </table>
</template>
