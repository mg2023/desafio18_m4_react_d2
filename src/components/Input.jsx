function Input(props) {
  return (
/**
* Punto 1, componente recibe nombre y contraseña
* Mediante props recibe variables de estado y funciones modificadoras
* 
*/
    <div className="form-group">
      <input type="text" className="form-control" name={props.nombre} 
      placeholder="Ingrese su nombre" 
      onChange={ (e)=> props.setNombre(e.target.value)} value={props.nombre} />

      <input type="password" className="form-control" name={props.password} 
      placeholder="Ingrese su password" 
      onChange={ (e)=> props.setPassword(e.target.value)} value={props.password}/>

    </div>
    )
  }
  
  export default Input;
  