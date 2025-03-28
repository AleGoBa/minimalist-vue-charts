<template>
  <div>
    <canvas v-if="ready" ref="customChart" />
  </div>
</template>
<script setup>
import {nextTick, onMounted, ref} from "vue";
import {defaultDatasetStyle, defaultOptions, getNewChart} from "../helpers/charts.js";

const customChart = ref();
const data = ref({labels: null, datasets: []});
const ready = ref(false);

const {xLabels, customOptions, datasets, extraConfig} = defineProps({
  xLabels: {
    type: Array,
    required: true,
  },
  datasets: {
    type: Array,
    required: true
  },
  extraConfig: {
    type: Object,
    default: () => ({})
  },
  customOptions: {
    type: Object,
    default: () => ({...defaultOptions})
  },
})

const chartOptions = {...defaultOptions, ...customOptions};
const initializeDatasets = () => {
  return new Promise(resolve => {
    data.value.labels = xLabels;
    for (let dataset of datasets) {
      data.value.datasets.push({
        ...{
          backgroundColor: (ctx) => {
            if (ctx.chart.chartArea) {
              let gradient = ctx.chart.ctx.createLinearGradient(0, ctx.chart.chartArea.top, 0, ctx.chart.chartArea.bottom)
              gradient.addColorStop(0, dataset?.accentColor || '#b7c4d7')
              gradient.addColorStop(1, '#FFF')
              return gradient;
            }
          },
          borderColor: dataset?.borderColor || '#2C578A',
          ...defaultDatasetStyle,
        },
        ...dataset
      })
    }
    resolve(true)
  })
}

onMounted(async () => {
  await initializeDatasets();
  ready.value = true;
  await nextTick(() => {
    const chart = getNewChart(customChart.value, "line", data.value, chartOptions, extraConfig);
    window.addEventListener('resize', () => {
      if (chart?.resize) {
        chart.resize();
      }
    });
  })
})
</script>