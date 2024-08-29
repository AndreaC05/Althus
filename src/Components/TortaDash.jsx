import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import "../Style/Dashboard.css";
import "../Style/Inicio.css";

export default function TortaDash() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      datasets: [
        {
          data: [540, 325, 702, 300],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-700"),
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--blue-300"),
            documentStyle.getPropertyValue("--blue-100"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-700"),
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--blue-300"),
            documentStyle.getPropertyValue("--blue-100"),
          ],
        },
      ],
      labels: ["Bidón", "Botellón", "Caja", "Sixpack"],
    };

    const options = {
      plugins: {
        legend: {
          position: "bottom", // Mueve la leyenda hacia abajo
          labels: {
            usePointStyle: true,
            color: documentStyle.getPropertyValue("--text-color"),
            boxWidth: 10, // Ajusta el ancho de la caja del color de la leyenda
            padding: 20, // Añade espacio entre las etiquetas
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <div className="card tortadash_com">
        <div className="letters_pie mb-5 mt-3">
          <h3>Ventas por Categoría</h3>
        </div>
        <div className="grafico_circule">
          <Chart
            type="pie"
            data={chartData}
            options={chartOptions}
            className="w-full md:w-17rem mt-5 grafico_circle"
          />
        </div>
      </div>
    </>
  );
}
