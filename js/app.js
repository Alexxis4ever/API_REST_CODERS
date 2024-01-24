/* 3. Importar a los coders */

import { getCoders } from "../apiConnection/API.js";

/* 1. funcion iife se autoejecuta sin invocarse,
solo de define */
(function () {
  document.addEventListener("DOMContentLoaded", showCoders);
  async function showCoders() {
    try {
      const coders = await getCoders();
      renderCoders(coders);
      // console.log(coders);
    } catch (error) {}
  }
})();

function renderCoders(coders) {
  const tbody = document.querySelector(".table-group-divider");
  tbody.innerHTML = "";

  coders.forEach((coder) => {
    const {
      id,
      imagen,
      nombre,
      promedio,
      especialidad,
      expertoTecnologia,
      detalle,
    } = coder;
    tbody.innerHTML += `
            <tr>
                <th>${id}</th>
                <td><img src="img/${imagen}" width="50px"></td>
                <td>${nombre}</td>
                <td>${promedio}</td>
                <td>${especialidad}</td>
                <td>${expertoTecnologia}</td>
                <td><button type='button' class="btn btn-warning">Details</button></td>
            </tr>
        `;
  });
}
