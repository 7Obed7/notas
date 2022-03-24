import { useState } from "react";

const App= () => {
  // hook -> use.....
  // state -> useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });
 
  
  const handleInputChange = (event) => { 
    setInputsState({...inputsState, [event.target.name]:
    event.target.value });
    };

  
  return (
    <div className="App">
      <h1> Notas  </h1>
      <label> Titulo
      <input 
      id="title" 
      name="title" 
      type="text" 
      onChange={handleInputChange}
      value={inputsState.title}
      />
      </label>
      <br/>
      <label> Fecha
      <input 
      id="date" 
      name="date" 
      type="text" 
      onChange={handleInputChange}
      value={inputsState.date}
      />
      </label>
      <br/>
      <label> Nota
      <input 
      id="note" 
      name="note" 
      type="text" 
      onChange={handleInputChange}
      value={inputsState.note}
      />
      </label>
      </div>
  );

}
export default App;