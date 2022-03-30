import { number } from "prop-types";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { Helmet } from "react-helmet-async";
import ApexChart from "react-apexcharts";

interface IHistorycal {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorycal[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), { refetchInterval: 5000, });
  return (
    <div>
      {isLoading ?
        "Loading chart..." :
        <ApexChart
          type="line"
          series={[
            { name: "price", data: data?.map((price) => price.close) as number[] },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: { height: 300, width: 500, toolbar: { show: false }, background: "transparent" },
            grid: { show: false },
            stroke: { curve: "smooth", width: 3 },
            yaxis: { show: false },
            xaxis: { axisBorder: { show: false }, axisTicks: { show: false }, labels: { show: false }, categories: data?.map((price) => price.time_close), type: "datetime", },
            // fill: { type: "gradient", gradient: { gradientToColors: ["#9c88ff"], stops: [0, 100] } },
            colors: ["#8c7ae6"],
            tooltip: { y: { formatter: (value) => `$${value.toFixed(3)}` } },
          }} />
      }
    </div >
  );
}

export default Chart;

// APEX CHARTS
// 현대적이고 인터랙티브한 오픈 소스 차트
// npm install --save react-apexcharts apexcharts
// https://apexcharts.com