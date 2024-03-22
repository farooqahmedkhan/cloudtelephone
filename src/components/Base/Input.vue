<script setup>
import { useField } from 'vee-validate'
import { computed } from 'vue'

const emit = defineEmits( ['update:modelValue'] )

const props = defineProps( {
  modelValue: {
    type: String,
    default: null
  },

  label: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  rules: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: "Enter Name"
  },
  type: {
    type: String,
    default: "text"
  },
  id: {
    type: String,
    required: true
  },
} )

const { value, errorMessage, validate } = useField( props.name, props.rules )

const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    value.value = val
    emit( 'update:modelValue', value.value )
  }
} )
</script>

<template>
  <div class="form-group">
    <label :for="id" class="form-label">{{ label }}</label>
    <input :type="type" :id="id" class="form-control" :placeholder="placeholder" v-model="inputModelValue"
      @blur="validate">
    <span v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</span>


  </div>
</template>


<style lang="scss" scoped></style>