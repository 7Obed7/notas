import { useState } from "react";

const App = () => {
  // hook -> use.....
  // state -> useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });

  const handleInputChange = (event) => {
    setInputsState({
      ...inputsState,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleClickre = () => {
    setInputsState({ /*jjjj*/ ...inputsState, title: "", date: "", note: "" });
  };

  const handleChangeres = (e) => {
    const paso2 = Number(e.target.value);
    const paso = Number(e.target.value);
    if (isNaN(paso2)) {
      return;
    }
    if (isNaN(paso)) {
      return;
    }
    setInputsState({
      /*Operador espread*/ ...inputsState,
      paso: Number(e.target.value),
    });

    setInputsState({
      /*Operador espread*/ ...inputsState,
      paso2: Number(e.target.value),
    });
  };

  return (
    <div className="App">
      <h1> Notas </h1>
      <label>
        {" "}
        Titulo
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleInputChange}
          value={inputsState.title}
        />
      </label>
      <br />
      <label>
        {" "}
        Fecha
        <input
          id="date"
          name="date"
          type="text"
          onChange={handleInputChange}
          value={inputsState.date}
        />
      </label>
      <br />
      <label>
        {" "}
        Nota
        <input
          id="note"
          name="note"
          type="text"
          onChange={handleInputChange}
          value={inputsState.note}
        />
      </label>
      <br />
      <button className="btn btn-primary me-2" onClick={handleClickre}
        //onChange={handleKeyDown}
        onChanges={handleChangeres}
        >
          {/* jan*/}
          Reset: {inputsState.valor}
        </button>
    </div>
  );
};
export default App;
