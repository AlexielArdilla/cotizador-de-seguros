import React, { Fragment } from 'react';


const Resumen = ({datos}) => {

    const { marca, year, plan } = datos;

    if(marca === '' || year === '' || plan ==='' ) return null;

    return ( 

        <Fragment>
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Plan: {plan}</li>
            <li>Año del auto: {year}</li>
        </ul>
        </Fragment>
     );
}
 
export default Resumen;