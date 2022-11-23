import React from 'react';
import { useState }  from "react";
import Cookies from "js-cookie";

// Tabla basada en https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
function Tabla(props) {
  // const { currentUser } = useCookieAuth();
  // console.log(currentUser);
  function devolver_tabla() {
    let rows = [];
    let provisorio = 1;
    for (let i = 0; i < Object.keys(props.respuesta).length; i++) {
      rows.push(props.respuesta[`${i}`]);
      // console.log(props.respuesta[`${i}`].id_user);
      if (props.respuesta[`${i}`].id_user == 0) {
        provisorio = 0;
      }
    }
    console.log(rows);
    return (rows.map((row, index) => {
      let { cantidad, product, fecha, user, id_user } = row;
      let parts = fecha.split('T');
      fecha = parts[0];
      return (
        <>
          <tr key={index}>
            <td>{user}</td>
            <td>{fecha}</td>
            <td>{product}</td>
            <td>{cantidad}</td>
          </tr>
        </>)
    }))
  };


  return (
    <>
      <table className='tabla_historial'>
        <thead>
          <tr>
            <th>Usuario </th>
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