<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content subtitle is-6">
         {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item has-text-primary">Edit</RouterLink>
      <a @click.prevent="storeNotes.deleteNote(note.id)" class="card-footer-item has-text-danger"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/*
    IMPORTS
*/
import { computed } from "vue";
import { useNotesStore } from "../../stores/storeNotes";

/*
    STORE NOTE
*/
const storeNotes = useNotesStore()

/*
    PROPS
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
    CHARACTER LENGTH
*/
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = props.note.content.length > 1 ? "characteres" : "character";
  return `${length} ${description}`;
});
</script>
