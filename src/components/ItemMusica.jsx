import React, { useState } from "react";
import capaPadrao from "../html-css-template/imagens/capa.png";
import iconEdit from "../html-css-template/imagens/edit-icon.png";
import iconDelete from "../html-css-template/imagens/delete-icon.png";
import api from "../api";

function ItemMusica(props) {
  const [nomeInput, setNomeInput] = useState(props.nome);
  const [artistaInput, setArtistaInput] = useState(props.artista);
  const [generoInput, setGeneroInput] = useState(props.genero);
  const [anoInput, setAnoInput] = useState(props.ano);

  const [editing, setEditing] = useState(false);
  const estiloCard = {
    backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})`
  };

  function atualizarMusica() {
    const musicaAtualizada = {
      nome: nomeInput,
      artista: artistaInput,
      genero: generoInput,
      ano: anoInput
    };

    api
      .put(`/${props.id}`, musicaAtualizada)
      .then(() => {
        alert("Musica atualizada com sucesso");
      })
      .catch((error) => {
        alert("Ocorreu um erro!", error);
      });

      setEditing(false);
  }

  return (
    <>
      <div className="card-music" style={estiloCard}>
        <div className="icons">
          <img src={iconEdit} alt="" onClick={() => setEditing(true)} />
          <img src={iconDelete} alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              onChange={(e) => setNomeInput(e.target.value)}
              type="text"
              defaultValue={nomeInput}
              disabled={!editing}
              className={editing ? "input-music-enable" : "input-music-disabled"}
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              onChange={(e) => setArtistaInput(e.target.value)}
              disabled={!editing}
              className={editing ? "input-music-enable" : "input-music-disabled"}
              type="text"
              defaultValue={artistaInput}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              onChange={(e) => setGeneroInput(e.target.value)}
              disabled={!editing}
              className={editing ? "input-music-enable" : "input-music-disabled"}
              type="text"
              defaultValue={generoInput}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              onChange={(e) => setAnoInput(e.target.value)}
              disabled={!editing}
              className={editing ? "input-music-enable" : "input-music-disabled"}
              type="text"
              defaultValue={anoInput}
            />
          </p>
          <button onClick={atualizarMusica} className="btn-salvar-enable">
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
