import Input from './components/Input';
import Button from './components/Button';

import React, { useState } from 'react'

function App() {
/**
* Punto 2, El componente principal App.jsx almacenará los estados de los inputs a través de
useState.
* 
*/
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='container bg-info' >
      <div>
        <h1 className='pt-3 text-center'>Desafio2: Estados de los componentes y eventos</h1>
      </div>
      <div className="row">
        <div className="col">
        </div>
        <div className="col">
          <Input nombre={nombre} setNombre={setNombre}
            password={password} setPassword={setPassword} />
          {/* Punto 3, El componente Boton debe mostrarse únicamente si el valor del input password es
              igual a “252525”. */}
          {password === "252525" ? <Button /> : null}
        </div>
        <div className="col">
        </div>
      </div>
    </div>
  );

}

export default App;
