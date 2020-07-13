<template>
  <div id="app">
    <div class="container">
      <div class="app-title">
        <div class="row">
          <div class="twelve columns">
            <h1 class="text-center">{{appName}}</h1>
          </div>
        </div>
      </div>
      <GenerateTextForm @generate="handleGenerate" />
      <GeneratedText :text="generatedText" />
    </div>
  </div>
</template>

<script>
import { LoremIpsum } from 'lorem-ipsum';

import GenerateTextForm from './components/GenerateTextForm.vue';
import GeneratedText from './components/GeneratedText.vue';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default {
  name: 'App',
  data: () => ({
    appName: 'Lorem Ipsum Generator',
    generatedText: '',
  }),
  components: {
    GenerateTextForm,
    GeneratedText,
  },
  methods: {
    handleGenerate(e) {
      this.generatedText = lorem.generateParagraphs(parseInt(e, 0));
    },
  },
};
</script>
