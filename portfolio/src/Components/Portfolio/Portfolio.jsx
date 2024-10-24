import React from 'react';
import { Project } from './Project/Project';
import tiendapi from '../../assets/Images/tiendapi.png';
import gifgenerator from '../../assets/Images/gifgenerator.png';
import pipati from '../../assets/Images/juego.png';
import Ricardo from '../../assets/Images/Ricardo.png'
import Formulario from '../../assets/Images/Formulario.png'
import tienda from '../../assets/Images/tienda.png'
import '../../assets/Style/style.css'

export const Portfolio = () => {
    return (
        <section className='proyect'>
            <h2 className='project'>Mis Proyectos</h2>
            <div className="projects"> {}
                <Project
                    Image={gifgenerator}
                    Name='GIFGENERATOR'
                    Link='https://github.com/JEHFxD/GIFGENERATOR'
                    Description='Un generador de Gif'
                />
                <Project
                    Image={tiendapi}
                    Name='TIENDAPI'
                    Link='https://github.com/JEHFxD/TIENDAPI'
                    Description='Una tienda creada mediante una API'
                />
                <Project
                    Image={pipati}
                    Name='PI-PA-TI'
                    Link='https://github.com/JEHFxD/pi-pa-ti'
                    Description='Un juego de piedra papel o tijeras'
                />
                <Project
                    Image={Ricardo}
                    Name='RickandMorty'
                    Link='https://github.com/JEHFxD/RickMorty'
                    Description='Un generador de personajes del famoso programa Rick and Morty'
                />
                <Project
                    Image={Formulario}
                    Name='Formulario Contacto'
                    Link='https://github.com/JEHFxD/FormularioContacto'
                    Description='Un formulario de contacto'
                />
                <Project
                    Image={tienda}
                    Name='Tienda de Videojuegos'
                    Link='https://github.com/JEHFxD/CarritoCompras'
                    Description='Una tienda para comprar videojuegos'
                />
            </div>
        </section>
    );
};
