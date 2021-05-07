import LineChart from "../components/charts/LineChart";

function Report2() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Likes',
            data: [22, 11, 33, 123, 221, 88],
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
          <LineChart data={data} options={options} title={'Report 2'} />
        </div>
    );
  }
  
  export default Report2;
  