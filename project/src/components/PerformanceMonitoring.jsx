import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './PerformanceMonitoring.css';

const PerformanceMonitoring = () => {
  const [url, setUrl] = useState('');
  const [cpuData, setCpuData] = useState([]);
  const [memoryData, setMemoryData] = useState([]);
  const [networkData, setNetworkData] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating real-time data updates
      setCpuData(prev => [...prev.slice(-20), Math.random() * 100]);
      setMemoryData(prev => [...prev.slice(-20), Math.random() * 100]);
      setNetworkData(prev => [...prev.slice(-20), Math.random() * 100]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    // Placeholder for fetching real-time data from the provided URL
    console.log('Fetching data from:', e.target.value);
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="performance-monitoring">
      <h2>Real-Time Performance Monitoring</h2>
      <input 
        type="text" 
        placeholder="Enter URL to monitor..." 
        value={url} 
        onChange={handleUrlChange} 
        className="url-input"
      />
      
      <div className="charts-container">
        <div className="chart-box">
          <h3>CPU Usage (%)</h3>
          <Line data={{ labels: Array(cpuData.length).fill(''), datasets: [{ data: cpuData, borderColor: '#ff6384', fill: false }] }} options={chartOptions} />
        </div>
        
        <div className="chart-box">
          <h3>Memory Usage (%)</h3>
          <Line data={{ labels: Array(memoryData.length).fill(''), datasets: [{ data: memoryData, borderColor: '#36a2eb', fill: false }] }} options={chartOptions} />
        </div>
        
        <div className="chart-box">
          <h3>Network Traffic (MB/s)</h3>
          <Line data={{ labels: Array(networkData.length).fill(''), datasets: [{ data: networkData, borderColor: '#ffce56', fill: false }] }} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitoring;
