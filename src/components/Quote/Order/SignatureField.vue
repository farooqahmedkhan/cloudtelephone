<script setup>
const signaturePad = ref(null)
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';
import { ref } from "vue";
import {supabase} from "../../../supabase";

const errorMessage = ref('')

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

async function uploadToSupabase() {
  // upload signature to supabase
  const { isEmpty, data } = signaturePad.value.saveSignature()
  if (isEmpty) {
    errorMessage.value = 'Please sign the form'
    return
  }
  const path = `signatures/${uuidv4()}.png`
  const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');
  const { error } = await supabase.storage
    .from('media')
    .upload(path, buffer, {
      contentType: 'image/png',
      upsert: false
    });

  if (error) {
    errorMessage.value = error.message
    return
  }

  const { data: url } = await supabase
    .storage
    .from('media')
    .getPublicUrl(path)

  emit('update:modelValue', url.publicUrl)

}

defineExpose({ uploadToSupabase })

</script>

<template>
  <div class="form-group">
    <label for="signature">Write your signature in box below:</label>
    <VueSignaturePad width="500px" height="300px" ref="signaturePad" class="rounded border" />
    <span v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</span>
  </div>
</template>


<style lang="scss" scoped></style>