import { useState } from "react";

const App= () => {
  // hook -> use.....
  // state -> useState

  const [state, setState] = useState("");

  
  const handleInputChange = (event) => { 
    setState(event.target.value);
       };
  
  return (
    <div className="App">
      <h1> Notas  </h1>
      <label> Input de prueba
      <input 
      id="pruebaID" 
      name="prueba" 
      type="text" 
      onChange={handleInputChange}
      value={state}
      />
      </label>
      </div>
  );

}
export default App;