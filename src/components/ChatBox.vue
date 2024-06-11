<template>
  <div class="flex flex-col border rounded-md border-sky-500 shadow-sky-300 shadow-md" id="msg-box">
    <div class="flex justify-between items-center p-4 border-b">
      <h1 class="text-primary text-xl font-bold">Chat</h1>
    </div>
    <div class="flex-1 p-4 overflow-y-auto max-h-[80vh] min-h-[50vh] " ref="chatContainer">
      <div v-for="message in messages" :key="message.id" class="mb-4">      
        <div v-html="message.content"
          :class="['p-2 rounded', me(message) ? 'text-green-700  text-right' : 'text-left  text-gray-700 ']" />
      </div>
    </div>

    <!-- text editor -->
    <div class="p-4 border-t text-right">
      <text-editor v-model="newMessage" @keyup.enter="sendMessage" />
      <button class="btn btn-green btn-sm disabled:opacity-50" @click="sendMessage" type="primary">Send</button>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import TextEditor from "./TextEditor.vue";
import { useOrderStore } from "@/store/orderStore";

const orderStore = useOrderStore()

const props = defineProps({
  orderId: {
    type: Number,
    default: null
  },
  conversations: {
    type: Array,
    default: null
  }
})

const messages = ref(props.conversations)



const me = (message) => {
  return message.senderType !== 'admin';
};

const newMessage = ref('');

const sendMessage = async () => {
  if (newMessage.value.trim() !== '') {
    const data = await orderStore.sendMessage({ orderId: props.orderId, content: newMessage.value })
    messages.value.push(data);
    newMessage.value = '';
    scrollToBottom();
  }
};

// Scroll to bottom when new message is added
const chatContainer = ref(null);

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTo({
        top: chatContainer.value.scrollHeight,
        behavior: 'smooth'
      });
    }
  });
};

</script>
