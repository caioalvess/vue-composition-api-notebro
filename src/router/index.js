import { createRouter, createWebHistory } from "vue-router";
import ViewNotes from "../views/ViewNotes.vue";
import ViewStats from "../views/ViewStats.vue";
import ViewEditNote from "../views/ViewEditNote.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNotes,
    },
    {
      path: "/editNote/:id",
      name: "edit-note",
      component: ViewEditNote,
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStats,
    },
  ],
});

export default router;
