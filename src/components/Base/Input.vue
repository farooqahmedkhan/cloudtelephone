<script setup>
import { useField } from 'vee-validate'
import { computed, watch } from 'vue'

const emit = defineEmits( ['update:modelValue'] )

const props = defineProps( {
  modelValue: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
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

let first = true
watch( () => props.modelValue, ( newValue ) => {
  if ( first && newValue ) {
    first = false
    value.value = newValue
  }
} )

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
    <label :for="id" class="form-label" :class="`${disabled && 'opacity-60'}`">{{ label }} <span v-if="rules === 'required'" class="text-red-600">*</span></label>
    <input :type="type" :id="id" class="form-control disabled:border-opacity-60 disabled:cursor-not-allowed" :placeholder="placeholder" v-model="inputModelValue"
      @blur="validate" :disabled="disabled">
    <span v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</span>


  </div>
</template>


<style lang="scss" scoped></style>