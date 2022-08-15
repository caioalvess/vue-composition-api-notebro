<template>
  <AddEditNotes
    v-model="noteContent"
    bgColor="danger"
    label="Edit Note"
    placeholder="Edit note"
    ref="addEditNotesRef"
  >
    <template #buttons>
      <button @click="$router.back()" class="button is-link is-light mr-2 has-text-danger">
        Cancel
      </button>
      <button
        @click="handleSaveClicked"
        class="button is-link has-background-info"
        :disabled="!noteContent"
      >
        Save Note
      </button>
    </template>
  </AddEditNotes>
</template>

<script setup>
/*
    IMPORTS
*/
import { ref } from "vue";
import { useNotesStore } from "../stores/storeNotes";
import { useRoute, useRouter } from "vue-router";
import AddEditNotes from "../components/notes/AddEditNotes.vue";

/*
    ROUTE
*/
const $route = useRoute();
const $router = useRouter();

/*
    STORE
*/
const storeNotes = useNotesStore();

/*
    NOTE
*/
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent($route.params.id);

/*
    HANDLE SAVE CLICKED
*/
const handleSaveClicked = () => {
  storeNotes.updateNote($route.params.id, noteContent.value);
  $router.push('/')
};
</script>
