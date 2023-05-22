<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import {Bar, Doughnut, Line, Scatter, PolarArea} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
} from 'chart.js'
import Search from "@/components/dashboard/search.vue";
</script>
<template>
  <section class="bg-dashboard">
    <div class="container">
      <div class="row">
        <menuDashboard></menuDashboard>
        <div class="col-10 px-5 py-2">
          <search></search>


          <div class="row mb-4">
            <div class="col-12">
              <div class="card box-shadow">
                <div class="card-header bg-light  py-3 px-3">
                  <div class="row">
                    <div class="col-12">
                      <h6>Mijn statistieken</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class=" statistics1">
                    <b>Inkomsten deze week</b>
                    <div class="statistics2">
                      <b>€ 320,85</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-6">
              <div class="card box-shadow">
                <div class="card-header bg-light  py-3 px-3">
                  <div class="row">
                    <div class="col-12">
                      <h6>Mijn statistieken</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <Bar
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="verdiend_week"
                  />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card box-shadow">
                <div class="card-header bg-light  py-3 px-3">
                  <div class="row">
                    <div class="col-12">
                      <h6>Mijn statistieken</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <Scatter
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="mixed"
                  />

                </div>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-6">
              <div class="card box-shadow">
                <div class="card-header bg-light  py-3 px-3">
                  <div class="row">
                    <div class="col-12">
                      <h6>Mijn statistieken</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <Doughnut
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="gewerktvoor"
                  />
                </div>

              </div>
            </div>
            <div class="col-6">
              <div class="card box-shadow">
                <div class="card-header bg-light  py-3 px-3">
                  <div class="row">
                    <div class="col-12">
                      <h6>Mijn statistieken</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <PolarArea
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="polar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-12">
              <div class="card box-shadow">
                <div class="card-header bg-light  py-3 px-3">
                  <div class="row">
                    <div class="col-12">
                      <h6>Mijn statistieken</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <Scatter
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="mixed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement, RadialLinearScale)
import api from "@/utils/api";
import chartUtil from "@/utils/chartUtil";

const a = new api();


export default {
  name: "statistics",
  components: {Bar, Doughnut},
  data() {
    return {
      responseData: null,
      verdiend_week: {
        labels: ['Week 12', 'Week 13', 'Week 14', 'Week 15'],
        datasets: [
          {
            label: 'Verdient',
            backgroundColor: '#144798',
            data: [5, 10, 15],
          }
        ]
      },
      huizenperkm: {
        labels: ['Route 1', 'Route 2', 'Route 3'],
        datasets: [
          {
            label: 'Mijn routes met meeste huizen per km2',
            backgroundColor: '#f87979',
            data: [7, 5, 4]
          }
        ]
      },
      mixed: {
        datasets: [{
          type: 'line',
          label: 'Uren gewerkt',
          data: [26, 40, 32, 30],
          backgroundColor: '#144798',
          color: '#144798',
        }, {
          type: 'scatter',
          label: 'Gemiddeld p/u verdient',
          data: [27, 26, 24, 23],
          backgroundColor: '#e30b12'
        }],
        labels: ['Week 12', 'Week 13', 'Week 14', 'Week 15']
      },
      polar: {
        labels: ['Route 1', 'Route 2', 'Route 3'],
        datasets: [
          {
            label: 'Mijn routes met meeste huizen per km2',
            data: [7, 5, 4],
            backgroundColor: ['#e30b1299', '#14479899', '#2c863299']

          }
        ]
      },
      gewerktvoor: {
        labels: ['PostNl', 'DPD', 'DHL'],
        datasets: [
          {
            label: 'Gewerkt voor',
            data: [60, 10, 30],
            backgroundColor: ['#14479899', '#e30b1299', '#2c863299']
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  created() {
    a.getDashboardInformation().then(response => {
      this.responseData = response.data[0]
      const ch = new chartUtil(this.responseData);
      const totalEarnings = ch.calculateTotal("earnings");
      const totalMinutes = ch.calculateTotal("Minutes")
      const totalHours = ch.timeConvert(totalMinutes);
      ch.EarnedPerHour(totalHours, totalEarnings);
      ch.PostOfficePrecantage();
      ch.MostValubaleRoute();
    })
  }
}


</script>

<style scoped>

</style>
