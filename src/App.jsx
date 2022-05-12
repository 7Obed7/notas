import { useState } from "react";

const App = () => {
  // hook -> use.....
  // state -> useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });

  let initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  const handleInputChange = (event) => {
    setInputsState({
      ...inputsState,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickre = () => {
    setInputsState({ /*jjjj*/ ...inputsState, title: "", date: "", note: "" });
  };

  const handleClickSave = () => {
    setNotas([...notas, inputsState]);
    localStorage.setItem("notas", JSON.stringify(...notas, inputsState));
    handleClickre();
  };

  const handleRemoveNote = (index) => {
    const nuevoArreglo = [];
    notas.forEach((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas(nuevoArreglo);
  };

  const handleClickLimpiarLista = () => {
    setNotas([]);
    localStorage.setItem("notas", JSON.stringify([]));
  };

  const handleClickNota = (index) => {
    setInputsState({
      title: notas[index].title,
      date: notas[index].date,
      note: notas[index].note,
    });
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
          {notas.length === 0 ? (
            <p> No hay notas capturadas.</p>
          ) : (
            <ul>
              {notas.map((nota, index) => {
                return (
                  <li
                    onClick={() => handleClickNota(index)}
                    key={index}
                    style={{ cursor: "pointer" }}
                  >
                    {nota.title} - {nota.date}&nbsp;
                    <i
                      className="bi-x-circle"
                      onClick={() => handleRemoveNote(index)}
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "0.75",
                      }}
                    ></i>
                  </li>
                );
              })}
            </ul>
          )}

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickLimpiarLista}
            disabled={notas.length === 0}
          >
            Limpiar lista
          </button>
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
              type="date"
              onChange={handleInputChange}
              value={inputsState.date}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label style={{ width: "100%" }}>
            {" "}
            Nota
            <textarea
              id="note"
              name="note"
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
                disabled={
                  inputsState.title === "" &&
                  inputsState.date === "" &&
                  inputsState.note === ""
                }
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
                disabled={
                  inputsState.title === "" ||
                  inputsState.date === "" ||
                  inputsState.note === ""
                }
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
