import React from "react";

const Lista = ({
  notas,
  handleClickNota,
  handleRemoveNote,
  handleClickLimpiarLista,
}) => {
  //const {notas, handleClickNota, handleRemoveNote,  handleClickLimpiarLista, } = props

  return (
    <>
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
    </>
  );
};

export default Lista;
