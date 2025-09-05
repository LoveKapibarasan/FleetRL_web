<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="battery-wrapper">
      <div class="battery-container">
        <!-- Chart -->
        <BarChart :data="chartData" :options="chartOptions" />
        <div class="battery-cap"></div>
        <div class="soc-text">
          {{ t("battery.soc", { value: soc }) }} <br />
          <span class="status">{{ t(`battery.${status}`) }}</span>
        </div>
      </div>
      <div class="battery-cable"></div>
      <div class="battery-plug"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
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

// ChartJS
export default defineComponent({
  name: "BatteryChart",
  components: { BarChart: Bar },
  setup() {
    const { t } = useI18n();

    const soc = ref(0);
    const status = ref<"charging" | "discharging" | "full">("charging");
    let intervalId: number | undefined;

    const fetchBatteryInfo = async () => {
      try {
        const res = await fetch("/api/battery");
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        soc.value = data.soc;
        status.value = data.status;
      } catch (err) {
        console.error("Failed to fetch battery info:", err);
      }
    };

    onMounted(() => {
      fetchBatteryInfo();
      intervalId = window.setInterval(fetchBatteryInfo, 5000);
    });

    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    const color = computed(() => {
      if (status.value === "discharging") return "blue";
      if (soc.value < 20) return "red";
      if (soc.value < 80) return "orange";
      return "limegreen";
    });

    const chartData = computed<ChartData<"bar">>(() => ({
      labels: [""],
      datasets: [
        {
          data: [soc.value],
          backgroundColor: color.value,
        },
      ],
    }));

    const chartOptions: ChartOptions<"bar"> = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 25, // 0,25,50,75,100
            callback: (value) => `${value}%`,
            color: "#333",
            font: { size: 12, weight: "bold" },
          },
          grid: { color: "#ccc" },
        },
        y: { display: false },
      },
      animation: { duration: 800 },
    };

    return { soc, status, chartData, chartOptions, t };
  },
});
</script>

<style scoped>
.battery-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.battery-container {
  position: relative;
  width: 400px;
  height: 120px;
  border: 6px solid #333;
  border-radius: 12px;
  background: #eee;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.battery-cap {
  position: absolute;
  top: 20%;
  right: -20px;
  width: 18px;
  height: 60%;
  background: #333;
  border-radius: 3px;
}

.soc-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}
.status {
  font-size: 1rem;
  font-weight: normal;
  color: #666;
}

.battery-cable {
  width: 60px;
  height: 8px;
  background: #333;
  border-radius: 4px;
}
.battery-plug {
  width: 20px;
  height: 20px;
  background: #333;
  border-radius: 4px;
  position: relative;
}
.battery-plug::before,
.battery-plug::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 10px;
  background: #333;
  top: -10px;
}
.battery-plug::before {
  left: 4px;
}
.battery-plug::after {
  right: 4px;
}
</style>
