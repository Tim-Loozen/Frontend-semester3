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
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="filter-select">Kies een weergave</label>
                </div>
                <select id="filter-select" class="custom-select" v-model="selectedValue" @change="getRange()">
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month" selected>Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
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
                      <b>€ {{ totalEarnings.toFixed(2).replace('.', ',') }}</b>
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

const ch = new chartUtil();
const a = new api();


export default {
  name: "statistics",
  components: {Bar, Doughnut},

  data() {
    return {
      selectedValue: null,
      responseData: null,
      totalEarnings: 0,
      verdiend_week: {
        type: 'time',
        time: {
          unit: 'week'
        },
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
        maintainAspectRatio: false,
      }
    }
  },
  created() {
    a.getDashboardInformation().then(response => {
      this.responseData = response.data[0]
      ch.setDataSet(this.responseData);
      ch.calculateTotal("earnings");
      // const totalMinutes = ch.calculateTotal("Minutes")
      // const totalHours = ch.timeConvert(totalMinutes);
      // ch.EarnedPerHour(totalHours, totalEarnings);
      // ch.PostOfficePrecantage();
      // ch.MostValubaleRoute();

      let filteredData = ch.Range('month');
      this.changeStats(filteredData);


    })
  },
  methods: {
    getRange() {
      this.changeStats(ch.Range(this.selectedValue));
    },

    changeStats(filteredData) {
      this.totalEarnings = 0;

      let postCompanies = [];
      let labels = [];
      let data = [];

      for (let i = 0; i < filteredData.length; i++) {
        this.totalEarnings += filteredData[i].earnings;
        postCompanies.push(filteredData[i].postOffice)
      }

      labels = [...new Set(postCompanies)];

      for (let i = 0; i < postCompanies.length; i++) {
        for (let j = 0; j < labels.length; j++) {
          if (postCompanies[i] === labels[j]) {
            if (data[j] === undefined) {
              data[j] = 1;
            } else {
              data[j]++;
            }
          }
        }
      }

      let chartdata = [];

      for (let i = 0; i < data.length; i++) {
        chartdata.push(data[i]);
      }

      this.gewerktvoor = {
        labels: labels,
        datasets: [
          {
            label: 'Gewerkt voor',
            data: chartdata,
            backgroundColor: ['#14479899', '#e30b1299', '#2c863299']
          }
        ]
      }

      let weeks = this.divideMonthIntoRanges();
      let d = [0, 0, 0, 0];
      let we = [0, 0, 0, 0]

      for (let i = 0; i < filteredData.length; i++) {
        let dataObj = filteredData[i];
        dataObj.date = new Date(dataObj.routeDate.date);

        for (let j = 0; j < weeks.length; j++) {
          if (weeks[j].days.includes(dataObj.date.getDay())) {
            d[j] += parseFloat(dataObj.Minutes / 60)
            we[j] += dataObj.earnings;
          }
        }
      }

      this.mixed = {
        datasets: [{
          type: 'line',
          label: 'Uren gewerkt',
          data: d,
          backgroundColor: '#144798',
          color: '#144798',
        }, {
          type: 'scatter',
          label: 'Gemiddeld p/u verdient',
          data: we,
          backgroundColor: '#e30b12'
        }],
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      }

      console.log(d);
    },

    divideMonthIntoRanges() {
      const currentDate = new Date(); // Get the current date
      const currentMonth = currentDate.getMonth(); // Get the current month
      const currentYear = currentDate.getFullYear(); // Get the current year

      const firstDay = new Date(currentYear, currentMonth, 1); // First day of the month
      const lastDay = new Date(currentYear, currentMonth + 1, 0); // Last day of the month

      const daysInMonth = lastDay.getDate(); // Total number of days in the month

      const rangeSize = Math.ceil(daysInMonth / 4); // Calculate the size of each range

      const ranges = [];

      for (let i = 0; i < 4; i++) {
        const startDay = i * rangeSize + 1; // Calculate the start day of the range
        const endDay = Math.min((i + 1) * rangeSize, daysInMonth); // Calculate the end day of the range

        const range = {
          days: [],
          postRouteHours: 0,
          earnings: 0
        };

        for (let j = startDay; j <= endDay; j++) {
          range.days.push(j);
        }

        ranges.push(range);
      }

      return ranges;
    }

  }

}


</script>

<style scoped>

</style>
