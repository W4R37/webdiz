import "./style.scss";

// const Chart = require('chart.js');
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";






Chart.register(...registerables);
Chart.register(ChartDataLabels);
Chart.register(ChartjsPluginStacked100.default);


const COLORS = {
  red: "rgba(244, 143, 177, 0.6)",
  yellow: "rgba(255, 235, 59, 0.6)",
  blue: "rgba(100, 181, 246, 0.6)",
  green: "rgba(51, 255, 74, 0.4)",
};
const ctx = document.getElementById("myChart").getContext("2d");
const ctx1 = document.getElementById("myChart1").getContext("2d");
const ctx2 = document.getElementById("myChart2").getContext("2d");
const test = document.getElementById("test").getContext("2d");
const dataHead = {
  labels: ["Mobile", "BackEnd", "Designer", "FrontEnd", "QA"],
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 50, 30, 24, 25],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 1,
    },
  ],
};
const dataSeniority = {
  labels: ["Medior", "Junior", "Senior"],
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 50, 30],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 1,
    },
  ],
};
const data9box = {
  labels: ["2", "3", "5", "6", "7", "8", "9"],
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 50, 30, 24, 25, 5, 15],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 1,
    },
  ],
};
const dataTest = {
  labels: ["HTML", "CSS", "JavaScript", "PHP","C#"],
  datasets: [
    {
      label: "beginner",
      data: [23, 12, 25, 34, 28],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "intermediate",
      data: [33, 35, 25, 24, 38],
      backgroundColor: "rgb(40, 59, 0)",
    },
    {
      label: "advanced",
      data: [23, 50, 15, 34, 38],
      backgroundColor: "rgb(0, 99, 132)",
    },
    {
      label: "expert",
      data: [23, 20, 35, 44, 28],
      backgroundColor: "rgb(0, 1, 132)",
    },
    {
      label: "owner",
      data: [13, 39, 34, 44, 38],
      backgroundColor: "rgb(0, 99, 32)",
    },
  ],
};

const configHead = {
  type: "doughnut",
  data: dataHead,
  options: {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
                const datapoints = ctx.chart.data.datasets[0].data
                function totalSum(total, datapoint) {
                  return total + datapoint;
                }
                const totalValue = datapoints.reduce(totalSum, 0)
                const percentageValue = (value / totalValue * 100).toFixed(1)

                return `${ctx.chart.data.labels[ctx.dataIndex]} - ${percentageValue}%`
              }
      },
    },
  },
};

const configSeniority = {
  type: "doughnut",
  data: dataSeniority,
};

const config9box = {
  type: "doughnut",
  data: data9box,
};

const configTest = {
  type: "bar",
  data: dataTest,
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
      stacked100: {
        enable: true,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

Chart.defaults.color = "#fff";
const newChartic = new Chart(ctx, configHead);
const newChartic1 = new Chart(ctx1, configSeniority);
const newChartic2 = new Chart(ctx2, config9box);
const newChartic3 = new Chart(test, {
  type: "bar",
  data: {
    labels: ["Foo", "Bar"],
    datasets: [
      {
        label: "bad",
        data: [
          { x: 5, y: "Foo" },
          { x: 25, y: "Bar" },
        ],
        backgroundColor: COLORS.red,
      },
      {
        label: "better",
        data: [
          { x: 15, y: "Foo" },
          { x: 10, y: "Bar" },
        ],
        backgroundColor: COLORS.yellow,
      },
      {
        label: "good",
        data: [
          { x: 10, y: "Foo" },
          { x: 8, y: "Bar" },
        ],
        backgroundColor: COLORS.blue,
      },
    ] ,
  },
  options: {
    indexAxis: "y",
    plugins: { stacked100: { enable: true } },
  },
});
