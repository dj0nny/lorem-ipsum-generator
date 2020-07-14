<template>
  <div class="generated-text-wrapper">
    <textarea id="generatedText" disabled v-model="text"></textarea>
    <button class="button-primary" @click="copyToClipboard">Copy text</button>
    <span class="copy" v-if="copied">Text copied to clipboard</span>
  </div>
</template>

<script>
export default {
  name: 'GeneratedText',
  data: () => ({
    copied: false,
  }),
  props: {
    text: String,
  },
  methods: {
    copyToClipboard() {
      this.$copyText(this.text).then(() => {
        this.copied = true;
      });
    },
  },
};
</script>
