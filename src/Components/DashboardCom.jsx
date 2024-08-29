import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Dropdown } from "primereact/dropdown";
import "../Style/Dashboard.css";

export default function DashboardCom() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const data = {
      labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: documentStyle.getPropertyValue("--pink-500"),
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const cities = [
    { name: "Esta semana", code: "RM" },
    { name: "Semana pasada", code: "NY" },
  ];

  // Set the initial value of selectedCity to the first city in the list
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="card dashboard_com">
      <div className="header_dash flex align-items-center">
        <div className="letters_dash">
          <h3>Resumen de Ingresos</h3>
        </div>
        <div className="dropdown_select flex mb-4 mt-3">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder=""
            className="w-full md:w-10rem p-2"
          />
        </div>
      </div>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
