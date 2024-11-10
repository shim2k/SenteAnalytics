import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartSevenState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartSeven: React.FC = () => {
  const [state, setState] = useState<ChartSevenState>({
    series: [
      {
        name: "Link 1",
        data: [0, 20, 35, 45, 26, 55, 65, 70, 65, 75, 60, 75],
      },
      {
        name: "Link 2",
        data: [10, 25, 30, 12, 10, 50, 60, 45, 60, 70, 30, 70],
      },
      {
        name: "Link 3",
        data: [5, 60, 25, 20, 25, 30, 55, 40, 30, 65, 60, 65],
      },
      {
        name: "Link 4",
        data: [15, 30, 13, 80, 40, 60, 70, 35, 70, 80, 80, 80],
      },
      {
        name: "Link 5",
        data: [8, 18, 28, 60, 28, 48, 58, 43, 58, 30, 53, 68],
      },
      {
        name: "Link 6",
        data: [12, 22, 32, 42, 32, 52, 62, 60, 62, 72, 40, 72],
      },
    ],
  });

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#C7D2E2", "#FF4560", "#00E396", "#775DD0", "#FEB019"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: true,
      },
      y: {
        title: {
          formatter: () => "Revenue: ",
        },
      },
      marker: {
        show: true,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="relative group col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Revenue per Generated Link
          </h4>
        </div>
        <div className="flex items-center">
          <p className="font-medium uppercase text-black dark:text-white">
            Sort by:
          </p>
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="" className="dark:bg-boxdark">
                Weekly
              </option>
            </select>
            <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                  fill="#64748B"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Disabled Chart Appearance */}
        <div id="chartSeven" className="opacity-50 blur-xs pointer-events-none -ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={310}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="invisible group-hover:visible bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
            This feature is not available yet
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center xsm:flex-row">
        <div className="py-2">
          {/* <p className="font-medium">Total Revenue</p>
          <h4 className="mt-1 text-title-sm font-bold text-black dark:text-white">
            $75,000.00
          </h4> */}
        </div>
      </div>
    </div>
  );
};

export default ChartSeven;