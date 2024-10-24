import React from 'react';
import whats from '../../assets/Images/Whats.png'
import gmail from '../../assets/Images/gmail.png'
import { Formulario } from '../Formulario/Formulario'
import linkedin from '../../assets/Images/linkedin.png'

export const Contact = () => {
    return (
      <div className='contacto'>
        <section>
          <h3>Información de Contacto</h3>
          <ul>
            <li><img src={whats}/>+57 3113681936</li> 
            <li><img src={gmail}/>hincapiefernandezjoan123@gmail.com</li>
            <li><img src={linkedin}/>Joan Esteban Hincapié Fernandez</li>
          </ul>
        </section>
        <Formulario/>
      </div>  
    );
  };