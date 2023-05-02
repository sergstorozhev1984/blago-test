<template>
  <div class="container">
    <ProjectFilter @onDataLoaded="changeData" />
    <div class="wrapper">
      <div v-if="!projects.length">
        Ми не знайшли квартир за вашими параметрами. 🙁 Змініть будь ласка умови
        пошуку
      </div>
      <ProjectPlanningCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import "@fontsource/manrope";
import ProjectFilter from "./components/ProjectFilter.vue";
import ProjectPlanningCard from "./components/ProjectPlanningCard.vue";
import { getProjectsList } from "../sevices/projectsAPI";

import { ref, onMounted } from "vue";

const projects = ref([]);

onMounted(async () => {
  try {
    projects.value = await getProjectsList();
  } catch (err) {
    console.log(err);
  }
});

const changeData = (data) => {
  projects.value = data;
};
</script>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Manrope, Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 190px;
}

.wrapper {
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 40px;
  justify-content: center;
}
</style>
