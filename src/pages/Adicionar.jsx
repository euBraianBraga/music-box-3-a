import React from "react";
import imgLateral from "../html-css-template/imagens/half-circles-pink-blue.png";

function Adicionar() {
  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form>
              <label>
                Música: <br />
                <input type="text" />
              </label>
              <br />
              <label>
                Artista: <br />
                <input type="text" />
              </label>
              <br />
              <label>
                Genêro: <br />
                <input type="text" />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input type="text" />
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input type="text" />
              </label>
              <br />
              <button className="btn">Enviar</button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;
