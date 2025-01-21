import  { useEffect, useRef,useState } from 'react';
import * as echarts from 'echarts';
import { useData,YearlyData } from '../contexts/DataContext';
import { Loader, Text } from '@mantine/core';;


const BarChart: React.FC = () => {
  const { yearlyData } = useData();
  const chartRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeChart = () => {
      if (!chartRef.current) return;

      const chart = echarts.init(chartRef.current);
      const filteredData = yearlyData.filter(
        (data: YearlyData) => data["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
      );

      chart.setOption({
        title: {
          text: 'Crop Yield in Indian Agriculture',
          left: 'center',
          textStyle: { fontSize: 18, color: '#5B7B7A' }, 
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params: { 0: { name: string; value: string } }) => {
            const { name, value } = params[0];
            return `<span style="color: #5B7B7A;">${name}: ${value} Kg/Ha</span>`; 
          },
        },
        xAxis: {
          type: 'category',
          data: filteredData.map((data: YearlyData) => data['Crop Name']),
          axisLabel: { rotate: 45, color: '#5B7B7A' }, 
        },
        yAxis: {
          type: 'value',
          name: 'Yield (Kg/Ha)',
          nameTextStyle: { padding: [0, 0, 10, 0], color: '#5B7B7A' }, 
        },
        series: [
          {
            data: filteredData.map(
              (data: YearlyData) => data["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0
            ),
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#4facfe' },
              { offset: 1, color: '#00f2fe' },
            ]),
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              emphasis: { color: '#0077b6', borderWidth: 1, borderColor: '#333' },
            },
          },
        ],
        grid: { left: '5%', right: '5%', bottom: '5%', top: '20%', containLabel: true },
      });

      return chart;
    };

    setLoading(yearlyData.length === 0);
    const chart = initializeChart();

    return () => chart?.dispose();
  }, [yearlyData]);

  return (
    <div style={{ position: 'relative', width: '100%', height: 400 }}>
      {loading ? (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Loader />
          <Text color="white">Loading data...</Text>
        </div>
      ) : null}
      <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default BarChart;
