<template>
  <div class="generated-text-wrapper">
    <textarea id="generatedText" disabled v-model="text"></textarea>
    <button class="button-primary" @click="copyToClipboard">Copy text</button>
  </div>
</template>

<script>
export default {
  name: 'GeneratedText',
  props: {
    text: String,
  },
  methods: {
    copyToClipboard() {
      this.$copyText(this.text).then(() => {
        // eslint-disable-next-line no-alert
        alert('Text copied');
      });
    },
  },
};
</script>
