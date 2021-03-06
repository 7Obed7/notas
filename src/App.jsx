import { useState } from "react";
import Lista from "./components/Lista";

const App = () => {
  // hook -> use.....
  // state -> useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });

  const [isSelected, setIsSelected] = useState({
    status: false,
    noteSelected: null,
  });

  let initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  const handleInputChange = (event) => {
    setInputsState({
      ...inputsState,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickRe = (event) => {
    setInputsState({ title: "", date: "", note: "" });
    setIsSelected({ status: false, noteSelected: null });
  };

  const handleClickSave = () => {
    setNotas([...notas, inputsState]);
    localStorage.setItem("notas", JSON.stringify(...notas, inputsState));
    handleClickRe();
    setIsSelected({ status: false, noteSelected: null });
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
    setIsSelected({ status: true, noteSelected: index });
    setInputsState({
      title: notas[index].title,
      date: notas[index].date,
      note: notas[index].note,
    });
  };

  const handleClickActualizar = () => {
    let listaModificada = notas;
    listaModificada[isSelected.noteSelected] = inputsState;
    console.log(isSelected);
    setNotas(listaModificada);
    localStorage.setItem("notas", JSON.stringify(listaModificada));
    handleClickRe();
    setIsSelected({ status: false, noteSelected: null });
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <Lista
            notas={notas}
            handleClickNota={handleClickNota}
            handleRemoveNote={handleRemoveNote}
            handleClickLimpiarLista={handleClickLimpiarLista}
          />
        </div>
        <div className="col">
          <h3> Notas </h3>

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
          {/* Bot??n para hacer reset */}
          <div className="row">
            <span className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickRe}
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

            {isSelected.status && (
              <span className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClickActualizar}
                  style={{ width: "100%" }}
                  disabled={
                    inputsState.title === "" ||
                    inputsState.date === "" ||
                    inputsState.note === ""
                  }
                >
                  Actualizar
                </button>
              </span>
            )}

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
                {/* Bot??n que sirve para guardar*/}
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
