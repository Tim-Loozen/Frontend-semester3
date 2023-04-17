<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import {Bar, Doughnut, Line, Scatter, PolarArea} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement, RadialLinearScale} from 'chart.js'
</script>
<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10 px-5 py-5">
        <div class="row py-1">
          <div class="col-6">
            <h2>Statistieken</h2>
          </div>
          <div class="col-6 ">
            <div class="text-end">
              <a href="/dashboard/settings" class="btn btn-primary">Instellingen</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="card">
          <div class="card-header bg-primary--blue text-white"><p><b>Mijn statistieken</b></p></div>
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <div class="row statistics1">
                    <div class="col-12">
                      <b>Inkomsten deze week</b>
                    </div>
                    <div class="col-12 statistics2">
                      <b>€ 320,85</b>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <Bar
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="verdiend_week"
                    />
                </div>
                <div class="col-4">
                  <Scatter
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="mixed"
                    />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <PolarArea
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="polar"
                    />
                </div>
                <div class="col-6">
                  <Doughnut
                      id="my-chart-id"
                      :options="chartOptions"
                      :data="gewerktvoor"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement, RadialLinearScale)

export default {
  name: "statistics",
  components: { Bar, Doughnut },
  data() {
    return {
      verdiend_week: {
        labels: ['Week 12', 'Week 13', 'Week 14', 'Week 15'],
        datasets: [
          {
            label: 'Verdient',
            backgroundColor: '#144798',
            data: [702, 1040, 768, 690]
          }
        ]
      },
      huizenperkm: {
        labels: [ 'Route 1', 'Route 2', 'Route 3' ],
        datasets: [ 
          { 
            label: 'Mijn routes met meeste huizen per km2',
            backgroundColor: '#f87979',
            data: [7, 5, 4] 
          } 
        ]
      }, 
      mixed: {
        datasets: [ {
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
        labels: [ 'Route 1', 'Route 2', 'Route 3' ],
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
        datasets:[
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
}


</script>

<style scoped>

</style>
