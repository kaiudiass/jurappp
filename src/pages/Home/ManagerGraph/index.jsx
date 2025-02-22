import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import styles from './ManagerGraph.module.css';
import { label } from 'framer-motion/client';

function ManagerGraph() {
  const data = [
    { id: 'Investido', value: 40 }, // Vermelho
    { id: 'Lucro', value: 30 }, // Azul
  ];

  return (
    <div className={styles.ManagerGraph} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
      <PieChart 
        height={300}
        width={200} // Ajusta a largura para não cortar os textos
        series={[
          {
            data: data, // Corrigido para manter "id" e "value"
            innerRadius: 40,
            outerRadius: 100,
            startAngle: -45,
            endAngle: 225,
            valueFormatter: (v) => (
              <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px' }}>
                R$ {v.value} - {v.id}
              </span>
            ),  // Exibe o valor numérico no gráfico
            cx: 80,
            
          }
          
        ]}
        colors={['#FF5B5B', '#6400B0']}
      />
    </div>
  );
}

export default ManagerGraph;