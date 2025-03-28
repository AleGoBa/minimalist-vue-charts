import TestComponent from "../src/components/TestComponent.vue";

export { TestComponent };

export const MinimalistVueCharts  = {
    install(app) {
        app.component("TestComponent", TestComponent);
    }
};