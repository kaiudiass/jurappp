import React from 'react'
import styles from './GraphDashboard.module.css';
import ApexCharts from 'react-apexcharts';


const GraphDashboard = () => {
  const optionsLine = {
    chart: {
      height: 328,
      type: 'line',
      zoom: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      },
      toolbar: {
        show: false  // Isso remove o "hamburger" e a barra de ferramentas
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [{
        name: "INVESTIMENTO",
        data: [1, 15, 26, 20, 33, 67]
      },
      {
        name: " RETORNO",
        data: [3, 33, 21, 42, 19, 32]
      },
    
    ],
    colors: ["#FF5B5B", '#8D00B0'],
 

    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9
      }
    },
    grid: {
      show: true,
      padding: {
        bottom: 0
      },
      borderColor: '#f3f3f3'
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    xaxis: {
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: '#A3A3A3',  // Cor dos rótulos no eixo X (datas)
          fontSize: '12px',
          
        }
      }
    },
    
    yaxis: {
      labels: {
        style: {
          colors: '#A3A3A3',  // Cor do texto dos rótulos no eixo Y (à esquerda)
          fontSize: '12px',
          fontWeight: 'bold'
        }
      }
    },
    
    
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -20,
      labels: {
          colors: '#A3A3A3',  // Cor do texto da legenda
         
         
      }
    }
  };

  return (
    <div className={styles.Graph}>
      <ApexCharts options={optionsLine} series={optionsLine.series} type="line" height="90%" />  
    </div>
  );
};

export default GraphDashboard;