<template>
  <div class="notes">
    <AddEditNotes
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNotesRef"
    >
      <template #buttons>
        <button
          @click="addNewNote"
          class="button is-link has-background-info"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNotes>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/*
    IMPORTS
*/
import { ref } from "vue";
import { useNotesStore } from "../stores/storeNotes";
import Note from "../components/notes/Note.vue";
import AddEditNotes from "../components/notes/AddEditNotes.vue";

/*
    NOTES
*/
const newNote = ref("");
const addEditNotesRef = ref(null);

/*
    STORE NOTE
*/
const storeNotes = useNotesStore();

/*
    ADD NOTE
*/
const addNewNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";

  addEditNotesRef.value.focusTextarea();
};
</script>
