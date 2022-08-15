<template>
  <div class="card p-4 mb-5" :class="`has-background-${ bgColor }`">
  <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          ref="textareaRef"
          class="textarea"
          :placeholder="placeholder"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/*
    IMPORTS
*/
import { ref } from 'vue';

/*
    PROPS
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'link'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String,
  }
});

/*
    TEXTAREA REF
*/
const textareaRef = ref(null);

/*
    EMITS
*/
const emit = defineEmits(["update:modelValue"]);

/*
    FOCUS TEXTAREA
*/
const focusTextarea = () => {
  textareaRef.value.focus();
};

/*
    EXPOSE
*/
defineExpose({
  focusTextarea,
});
</script>
