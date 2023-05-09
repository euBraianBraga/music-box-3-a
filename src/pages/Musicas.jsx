import { useEffect, useState } from "react";
import ItemMusica from "../components/ItemMusica";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Musicas() {
  const navigate = useNavigate();
  const [listaMusicas, setListaMusicas] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setListaMusicas(res.data);
        console.log("essa e a lista de musicas", listaMusicas);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="filter">
          <button className="btn"
           onClick={() => navigate("/adicionar")}>
            Adicionar
          </button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {listaMusicas.map((musica) => (
            <ItemMusica
              id={musica.id}
              nome={musica.nome}
              artista={musica.artista}
              genero={musica.genero}
              ano={musica.ano}
              imagem={musica.imagem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
