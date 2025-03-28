import MinimalistBarChart from "../src/components/MinimalistBarChart.vue";

export { MinimalistBarChart };

export const MinimalistVueCharts  = {
    install(app) {
        app.component("MinimalistBarChart", MinimalistBarChart);
    }
};