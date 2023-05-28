<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h5 class="mb-0 text-white">Charts</h5>
        <p class="mb-0 text-sm text-white">
          Charts on this page use Chart.js - Simple yet flexible JavaScript
          charting for designers & developers.
        </p>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <default-line-chart
          id="line-chart"
          title="Line chart"
          :chart="{
            labels: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                label: 'Organic Search',
                data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              },
              {
                label: 'Referral',
                data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
              },
              {
                label: 'Direct',
                data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
              },
            ],
          }"
        />
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
        <gradient-line-chart
          id="chart-line"
          title="Line chart with gradient"
          :chart="{
            labels: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                label: 'Mobile Apps',
                data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              },
              {
                label: 'Websites',
                data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
              },
            ],
          }"
        />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <bar-chart
          title="Bar Chart"
          height="300"
          :chart="{
            labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
            datasets: {
              label: 'Sales by age',
              data: [15, 20, 12, 60, 20, 15],
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultLineChart from "../examples/Charts/DefaultLineChart.vue";
import GradientLineChart from "../examples/Charts/GradientLineChart.vue";


export default {
  name: "Charts",
  components: {
    DefaultLineChart,
    GradientLineChart,

  },
};
</script>
