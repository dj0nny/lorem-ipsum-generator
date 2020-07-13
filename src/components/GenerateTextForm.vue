<template>
  <div class="generate-form-wrapper">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="ten columns">
          <input class="u-full-width" v-model="paragraphs" type="number" placeholder="Enter the number of paragraphs" id="paragraph-number">
          <div class="error" v-if="isEmpty">No number inserted</div>
        </div>
        <div class="two columns">
          <input class="button-primary" type="submit" value="Generate">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GenerateTextForm',
  data: () => ({
    paragraphs: null,
    isEmpty: false,
  }),
  methods: {
    handleSubmit() {
      if (this.paragraphs !== null && this.paragraphs !== '') {
        this.isEmpty = false;
        this.$emit('generate', this.paragraphs);
      } else {
        this.isEmpty = true;
      }
    },
  },
};
</script>
