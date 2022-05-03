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

  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  const handleClickSave = () => {
    notas.push(inputsState);
    localStorage.setItem("notas", JSON.stringify(notas));
    handleClickre();
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
          <ul>
            {notas.map((nota) => {
              return (
                <li>
                  {nota.title} Escribió el- {nota.date} - {nota.note}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <h3> Notas </h3>
          <label className="mb-2" style={{ width: "100%" }}></label>
          <label className="mb-2" style={{ width: "100%" }}>
            Titulo
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleInputChange}
              value={inputsState.title}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label className="mb-2" style={{ width: "100%" }}>
            Fecha
            <input
              id="date"
              name="date"
              type="text"
              onChange={handleInputChange}
              value={inputsState.date}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label style={{ width: "100%" }}>
            {" "}
            Nota
            <input
              id="note"
              name="note"
              type="text"
              onChange={handleInputChange}
              value={inputsState.note}
              style={{ width: "100%" }}
            />
          </label>
          <hr />
          {/* Botón para hacer reset */}
          <div className="row">
            <span className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickre}
                style={{ width: "100%" }}
              >
                {/* jan*/}
                Reset {inputsState.valor}
              </button>
            </span>

            {/* BOton para guardar */}
            <span className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickSave}
                style={{ width: "100%" }}
              >
                {/* Botón que sirve para guardar*/}
                Guardar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
