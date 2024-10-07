import { defineStore } from 'pinia'
import { Loader } from '@googlemaps/js-api-loader';

export const useLoaderStore = defineStore('loader', () => {
    const loader = new Loader({
        apiKey: "AIzaSyA7ECy-Jbcz278sAlvOr6IvIWy4RtoLOB4",
        version: "weekly",
        libraries: ["maps", "places"],
    });

    return { loader }
})
