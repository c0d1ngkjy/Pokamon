<template>
  <q-page class="flex flex-center">
    <div
      class="column justify-between content-center"
      style="height: 70vh; width: 25vw; min-width: 300px"
    >
      <q-card
        class="bg-primary text-white text-capitalize text-bold col-10 column justify-center content-center items-center full-width"
      >
        <div
          class="column justify-center content-center text-center full-width col-10"
        >
          <q-img :src="randomPokemon.imageUrl" width="80%"></q-img>
          <div>{{ randomPokemon.name }}</div>
        </div>
        <div class="absolute-bottom row full-width q-pa-sm">
          <q-btn
            no-caps
            push
            class="col"
            size="md"
            color="positive"
            @click="getRandomPokemon()"
            >Generate</q-btn
          >
          <div class="q-mx-xs"></div>
          <q-btn
            no-caps
            push
            class="col"
            size="md"
            color="red"
            @click="savePokemon()"
            >Save</q-btn
          >
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1281";
    const allPokemon = ref([]);
    const randomPokemon = ref({});
    const savedPokemon = [];

    // Get all Pokemon from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        allPokemon.value = data.results;
      })
      .catch((error) => {
        console.log(error);
      });

    // Get a random Pokemon from the list of all Pokemon
    function getRandomPokemon() {
      const randomIndex = Math.floor(Math.random() * allPokemon.value.length);
      const randomPokemonData = allPokemon.value[randomIndex];
      const randomPokemonUrl = randomPokemonData.url + "?ts=" + Date.now();

      fetch(randomPokemonUrl)
        .then((response) => response.json())
        .then((data) => {
          randomPokemon.value.imageUrl = data.sprites.front_default;
          randomPokemon.value.name = data.name;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function savePokemon() {
      const newPokemon = {
        name: randomPokemon.value.name,
        imageUrl: randomPokemon.value.imageUrl,
      };
      if (newPokemon.name) {
        savedPokemon.push(newPokemon);
      }
      console.log(savedPokemon);
    }

    return {
      getRandomPokemon,
      savePokemon,
      randomPokemon,
    };
  },
});
</script>
