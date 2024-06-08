<template>
  <div>
    <ckeditor v-model="model" :config="editorConfig" />
    <br>
  </div>
</template>

<script setup>
import { ref, defineModel } from "vue"
import { component as ckeditor } from '@mayasabha/ckeditor4-vue3'


const model = defineModel()
const editorConfig = ref({
  allowedContent: true,
  toolbarGroups: [{
    "name": "basicstyles",
    "groups": ["basicstyles"]
  },
  {
    "name": "links",
    "groups": ["links"]
  },
  {
    "name": "paragraph",
    "groups": ["list", "blocks"]
  },
  {
    "name": "document",
    "groups": ["mode"]
  },
  {
    "name": "insert",
    "groups": ["insert"]
  },
  {
    "name": "styles",
    "groups": ["styles"]
  },
  {
    "name": "about",
    "groups": ["about"]
  }
  ],

})

</script>