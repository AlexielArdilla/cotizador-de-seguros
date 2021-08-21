import React from 'react';
import styled from '@emotion/styled';


const Mensaje = styled.p`

background-color: rgb(127, 224, 237);
margin-top: 2rem;
padding: 1rem;
text-align: center;

`;

const Resultado = ({cotizacion}) => {

    return ( 

        (cotizacion === 0 ) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : cotizacion

     );
}
 
export default Resultado;