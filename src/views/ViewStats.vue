<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharacteresCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
/*
    IMPORTS
*/
import { useNotesStore } from "../stores/storeNotes";

/*
    STORE
*/
const storeNotes = useNotesStore();
</script>
