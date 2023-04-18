import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import ItemMusica from "../components/ItemMusica";
import api from "../api";

function Musicas() {
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
      <Menu />
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {
            listaMusicas.map((musica) => (
              <ItemMusica
                id={musica.id}
                nome={musica.nome}
                artista={musica.artista}
                genero={musica.genero}
                ano={musica.ano}
                imagem={musica.imagem}
            />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Musicas;
