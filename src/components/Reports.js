import LineChart from "./charts/LineChart";

function Reports() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
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
            <LineChart data={data} options={options} title="Test Chart" />
        </div>
    );
  }
  
  export default Reports;
  