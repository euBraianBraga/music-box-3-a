import React from "react";
import imgFundoVermelho from "../html-css-template/imagens/target-red.png";

function NotFound() {
  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>404</h1>

            <p className="subtitle">se perdeu? nada para ver por aqui...</p>
            <button className="btn">voltar</button>
          </div>

          <div className="img-lateral">
            <img src={imgFundoVermelho}
             alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;