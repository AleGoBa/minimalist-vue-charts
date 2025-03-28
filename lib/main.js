import MinimalistLineChart from "../src/components/MinimalistLineChart.vue";

export { MinimalistLineChart };

export const MinimalistVueCharts  = {
    install(app) {
        app.component("MinimalistLineChart", MinimalistLineChart);
    }
};