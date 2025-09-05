<template>
  <div class="battery-container">
    <BarChart
      :chart-data="chartData"
      :chart-options="chartOptions"
    />
    <div class="battery-cap"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
  name: "BatteryChart",
  components: { BarChart: Bar },
  setup() {
    const level = 65; // %

    const color = computed(() => {
      if (level < 20) return "red";
      if (level < 80) return "orange";
      return "limegreen";
    });

    const chartData: ChartData<"bar"> = {
      labels: [""],
      datasets: [
        {
          data: [level],
          backgroundColor: color.value,
          borderRadius: 5,
        },
      ],
    };

    const chartOptions: ChartOptions<"bar"> = {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          display: false,
        },
        y: { display: false },
      },
    };

    return { chartData, chartOptions };
  },
});
</script>

<style scoped>
.battery-container {
  position: relative;
  width: 200px;
  height: 60px;
  border: 4px solid #333;
  border-radius: 8px;
  background: #eee;
}

/* Battery cap */
.battery-cap {
  position: absolute;
  top: 15%;
  right: -12px;
  width: 10px;
  height: 70%;
  background: #333;
  border-radius: 2px;
}
</style>
