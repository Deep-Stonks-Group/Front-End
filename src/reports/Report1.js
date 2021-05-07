import { useEffect, useState } from "react";
import LineChart from "../components/charts/LineChart";
import { Spin } from 'antd';


function Report1() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({});

      useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setData({
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ]});
            setLoading(false);
        }, 5000)
      }, [])
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        responsive: true, 
        maintainAspectRatio: true
      };

    return (
        <div>
          {loading && <Spin />}
          {!loading && <LineChart data={data} options={options} title={'Report 1'} />}
        </div>
    );
  }
  
  export default Report1;
  