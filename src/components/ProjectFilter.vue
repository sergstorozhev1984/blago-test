<template>
  <section>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="selects-wrapper">
        <CustomSelect
          :options="[
            'Усі житлові комплекси',
            'ЖК «Паркова Алея»',
            'ЖК «Family Plaza»',
            'ЖК «Comfort Park»',
          ]"
          :default="'Усі житлові комплекси'"
          class="select"
          @option-selected="selectedOption1 = $event"
        />
        <CustomSelect
          :options="[
            'Кількість кімнат',
            '1 -кімнатні',
            '2 -кімнатні',
            '3 -кімнатні',
          ]"
          :default="'Кількість кімнат'"
          class="select"
          @option-selected="selectedOption2 = $event"
        />
        <CustomSelect
          :options="['Усі етапи', 'Будуються', 'Готові квартири']"
          :default="'Усі етапи'"
          class="select"
          @option-selected="selectedOption3 = $event"
        />
        <CustomSelect
          :options="['Усі райони', 'Центр', 'Пасічна', 'Міське озеро']"
          :default="'Усі райони'"
          class="select"
          @option-selected="selectedOption4 = $event"
        />
      </div>
      <div class="sliders-wrapper">
        <div class="priceWrapper">
          <p class="price-title">Ціна</p>
          <Slider
            v-model="value1"
            :min="0"
            :max="2000000"
            :format="formatPrice"
            :step="10000"
          />
        </div>
        <div class="squareWrapper">
          <p class="square-title">Площа</p>
          <Slider v-model="value2" :min="0" :max="120" :format="formatSquare" />
        </div>
        <div class="toggle-wrapper">
          <Toggle v-model="toggleValue" />
          <p>Показати тільки акційні пропозиції</p>
        </div>
      </div>
      <div class="buttons-wrapper">
        <CustomButton label="Показати варіанти" type="submit" />
        <CustomButton
          label="Скинути фільтр"
          type="submit"
          outlined
          @click="resetFilter"
        />
      </div>
    </form>
  </section>
</template>

<script setup>
import axios from "axios";
import CustomButton from "./shared/CustomButton.vue";

import CustomSelect from "./shared/CustomSelect.vue";

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.scss";

import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.scss";

import { ref, defineEmits } from "vue";
const emit = defineEmits(["onDataLoaded"]);

const value1 = ref([0, 2000000]);
const value2 = ref([0, 120]);

const formatPrice = (value1) => `${Math.round(value1)} &#x20b4`;
const formatSquare = (value2) =>
  `${Math.round(value2)} м<sup><small>2<small/></sup>`;

const toggleValue = ref(false);

const selectedOption1 = ref({});
const selectedOption2 = ref({});
const selectedOption3 = ref({});
const selectedOption4 = ref({});

const handleSubmit = async () => {
  let selectedProject = selectedOption1.value;

  let selectedRoomsCount = selectedOption2.value;

  switch (selectedRoomsCount) {
    case "1 -кімнатні":
      selectedRoomsCount = "1";
      break;
    case "2 -кімнатні":
      selectedRoomsCount = "2";
      break;
    case "3 -кімнатні":
      selectedRoomsCount = "3";
      break;

    default:
      selectedRoomsCount = null;
      break;
  }

  let selectedBuildingState = selectedOption3.value;

  switch (selectedBuildingState) {
    case "Будуються":
      selectedBuildingState = "50% готовності";
      break;
    case "Готові квартири":
      selectedBuildingState = "Будинок здано";
      break;

    default:
      selectedBuildingState = null;
      break;
  }

  let selectedDistrict = selectedOption4.value;

  const query = new URLSearchParams();

  selectedProject !== "Усі житлові комплекси"
    ? query.append("project", selectedProject)
    : (selectedProject = null);

  selectedRoomsCount ? query.append("rooms_count", selectedRoomsCount) : null;

  selectedBuildingState
    ? query.append("building_state", selectedBuildingState)
    : (selectedBuildingState = null);

  selectedDistrict !== "Усі райони"
    ? query.append("district", selectedDistrict)
    : (selectedDistrict = null);

  let minPrice = value1._rawValue[0];
  let maxPrice = value1._rawValue[1];

  let minSquare = value2._rawValue[0];
  let maxSquare = value2._rawValue[1];

  let is_discount = toggleValue._rawValue;

  query.append("minPrice", minPrice);
  query.append("maxPrice", maxPrice);

  query.append("minSquare", minSquare);
  query.append("maxSquare", maxSquare);

  if (is_discount === true) {
    query.append("is_discount", is_discount);
  }

  const url = "http://localhost:3000/api/projects/filtered?" + query.toString();

  try {
    const { data } = await axios.get(url);
    emit("onDataLoaded", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const resetFilter = async () => {
  const query = new URLSearchParams();
  value1._rawValue[0] = 0;
  value1._rawValue[1] = 2000000;
  value2._rawValue[0] = 0;
  value2._rawValue[1] = 120;

  query.append("minPrice", value1._rawValue[0]);
  query.append("maxPrice", value1._rawValue[1]);
  query.append("minSquare", value2._rawValue[0]);
  query.append("maxSquare", value2._rawValue[1]);
  const url = "http://localhost:3000/api/projects/filtered?" + query.toString();
  try {
    const { data } = await axios.get(url);
    emit("onDataLoaded", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss">
.form {
  padding-top: 15px;
}

.selects-wrapper {
  display: flex;
  column-gap: 40px;
  row-gap: 32px;
}

.sliders-wrapper {
  display: flex;
  margin-top: 64px;
  column-gap: 93px;
  justify-content: center;
  margin-bottom: 40px;
}

.price-title {
  margin: 0;
}

.priceWrapper,
.squareWrapper {
  display: flex;
  column-gap: 26px;
}

.square-title {
  margin: 0;
}

///// Custom styles for slider /////

.slider-target {
  width: 173px;
  margin-top: 10px;
}

.slider-base {
  background-color: #f3f3f3;
}

.slider-connect {
  background: #c1f600;
  // cursor: pointer;
  height: 4px;
}

.slider-tooltip {
  background-color: #fff;
  color: #000;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.45;
  padding: 0;
}

.slider-horizontal .slider-tooltip-top:before {
  border-top-color: #fff;
}

.slider-horizontal {
  height: 4px;
  background-color: #fff;
}

.slider-handle {
  overflow: visible;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
.slider-horizontal .slider-handle {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #c1f600;
  top: -9px;
  right: calc(20px / 2 * (-1));
}

//////// Custom styles for toggle ///////////

.toggle-wrapper {
  display: flex;
  column-gap: 16px;
}

.toggle {
  cursor: pointer;
}

.toggle-off {
  background: #fff;
  border-color: #fff;
  width: 37px;
}

.toggle-on {
  background: #fff;
  border-color: #fff;
  color: #fff;
  width: 37px;
}

.toggle-container:focus {
  box-shadow: none;
}

.toggle-handle {
  border: 2px solid #c1f600;
}

.toggle-label {
  box-sizing: border-box;
  background-color: #f3f3f3;
  border: none;
  border-radius: 50px;
  height: 15px;
}

.toggle-on .toggle-label {
  background-color: var(--accent-color);
}

.buttons-wrapper {
  display: flex;
  justify-content: center;
  column-gap: 40px;
}
</style>
