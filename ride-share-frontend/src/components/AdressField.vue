<script setup>

import { onMounted, useTemplateRef } from "vue";
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
    apiKey: "AIzaSyA7ECy-Jbcz278sAlvOr6IvIWy4RtoLOB4",
    version: "weekly",
    libraries: ["places"],
});

const addressInput = useTemplateRef('addressInput')

onMounted(() => {
    loader.load().then(async () => {
        new google.maps.places.Autocomplete(addressInput.value);
    })
})
</script>

<template>
    <input ref="addressInput"></input>
</template>
