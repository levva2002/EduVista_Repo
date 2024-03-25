import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function StudentWebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector('#trafficChart')).setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 1048,
              name: 'Web Development',
            },
            {
              value: 735,
              name: 'Music ',
            },
            {
              value: 580,
              name: 'Grapic Design',
            },
            {
              value: 484,
              name: 'Business Finance',
            },
          
          ],
        },
      ],
    });
  }, []);

  return (
    <div
      id="trafficChart"
      style={{ minHeight: '400px' }}
      className="echart"
    ></div>
  );
}

export default StudentWebTrafficChart;
