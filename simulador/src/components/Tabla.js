import React from 'react';

// Tabla basada en https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
function Tabla(props) {

  function devolver_tabla() {
    let rows = [];
    for (let i = 0; i < Object.keys(props.respuesta).length; i++) {
      rows.push(props.respuesta[`${i}`]);
    }
    console.log(rows);
    return (rows.map((row, index) => {
      let { cantidad, product, fecha, user } = row;
      let parts = fecha.split('T');
      fecha = parts[0];
      return (
        <tr key={index}>
          <td>{fecha}</td>
          <td>{product}</td>
          <td>{cantidad}</td>
        </tr>
      );
    }));
  }

    return (
      <>
        <table className='tabla_historial'>
          <thead>
            <tr>
              <th>Fecha </th>
              <th>Producto </th>
              <th>Cantidad </th>
            </tr>
          </thead>
          <tbody>{devolver_tabla()}</tbody>

        </table>
      </>
      
    );
  }

export default Tabla;