import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ResultsGraph = ({ seconds, averageSpeed }) => {
  const configData = (localStorage) => {
    let data = [];

    for (let i = 0; i < localStorage.length; i++) {
      if (i == 0) {
        let wpm = (localStorage[i] / 5) * 60;
        data.push(wpm);
      } else {
        let wpm = ((localStorage[i] - localStorage[i - 1]) / 5) * 60;
        data.push(wpm);
      }
    }

    return data;
  };

  const createXAxis = () => {
    let labels = [];
    for (let i = 0; i < seconds - 1; i++) {
      labels.push(i + 1);
    }

    return labels;
  };

  const createLine = (value) => {
    let line = [];
    for (let i = 0; i < seconds - 1; i++) {
      line.push(value);
    }

    return line;
  };

  const data = {
    labels: createXAxis(),

    datasets: [
      {
        label: "raw",
        data: configData(JSON.parse(localStorage.getItem("speedMapRaw"))),
        fill: false,
        borderColor: "#3F53FC",
      },
      {
        label: "wpm",
        data: configData(JSON.parse(localStorage.getItem("speedMap"))),
        fill: true,
        backgroundColor: "rgb(243, 187, 14, .1)",
        borderColor: "#F3BB0E",
      },
      {
        label: "pr",
        data: createLine(localStorage.getItem("hSpeed")),
        fill: false,

        borderColor: " #562FAC",
      },
      {
        label: "average",
        data: createLine(averageSpeed),
        fill: false,

        borderColor: " #FF6920",
      },
    ],
  };

  const options = {
    animation: {
      duration: 0,
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default ResultsGraph;
