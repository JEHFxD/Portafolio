import React from 'react'

export const Formulario = () => {
  return (
    <form className='contact-form'>
          <h2>Enviame un email</h2>
            <input type="text"placeholder="Nombre"/>
            <input type="email"placeholder="Email"/>
            <textarea placeholder="Mensaje"/>
            <button type="submit">Enviar</button>
          </form>
  )
}
