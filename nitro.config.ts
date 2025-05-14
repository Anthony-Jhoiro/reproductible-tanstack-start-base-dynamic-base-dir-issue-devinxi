export default defineNitroConfig({
    baseURL: '/local_my_tea_collection/ingress',
    apiBaseURL: '/local_my_tea_collection/ingress/api',
    runtimeConfig: {
        apiToken: 'HEEEEEEEEEEEEEEEEEEERE',
    },
    routeRules: {
        '/api/hassio_ingress/*/**': {
            proxy: '/local_my_tea_collection/ingress/**',
        },
    },
});
