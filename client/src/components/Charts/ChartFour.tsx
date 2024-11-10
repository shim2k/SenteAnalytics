import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartFourState {
  series: { name: string; data: number[] }[];
}

const ChartFour: React.FC = () => {
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        name: 'Revenue',
        data: [500, 750, 300, 900, 450, 600, 800],
      },
    ],
  });

  const currentDay = new Date().getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const options: ApexOptions = {
    colors: ["#3C50E0"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: days.slice(currentDay).concat(days.slice(0, currentDay)).reverse(),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      markers: {
        radius: 99,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: function (val: any) {
          return `$${val}`;
        },
      },
    },
  };

  return (
    <div className="relative group col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Revenue per Day
        </h3>
      </div>

      <div className="mb-2 relative">
        {/* Disable chart appearance */}
        <div id="chartFour" className="opacity-50 blur-xs pointer-events-none">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="invisible group-hover:visible bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
            This feature is not available yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartFour;