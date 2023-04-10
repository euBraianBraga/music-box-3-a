import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import ItemMusica from "../components/ItemMusica";
import api from "../api"; // importando a instância do Axios de "api.js"

function Musicas() {
  const [listaMusicas, setListaMusicas] = useState([]); // criando estado de vetor para uma lista de músicas

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

  // function listar() {
  //     console.log("Requisição está sendo feita: ");

  //     api.get()                               // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
  //     .then((resposta) => {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
  //         console.log(resposta.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
  //         setListaMusicas(resposta.data);    // utilizando o setter para alterar o valor do estado (useState) de "musicas"
  //     })
  //     .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
  //         console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
  //     });
  // }

  return (
    <>
      {/* <button onClick={listar}>Listar Músicas</button> Você pode descomentar a função listar para ver o funcionamento no botão tbm */}

      <Menu />
      <div class="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>

      <div class="container">
        <div class="music-boxes">
          <ItemMusica
            nome="Ela Partiu"
            artista="Tim Maia"
            genero="Musica da boa"
            ano="antiga"
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WVUxEWIaKiz_TPflALK1RSFRt4qaSPeFQ-CEGI7YCw&s"
          />
        </div>
      </div>
      {/* 
                Documentação do ".map()": 
                    - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                Por padrão, o React não consegue renderizar listas ou objetos, por isso precisamos iterá-los a fim de criar um elemento para ser renderizado;
                "map()" é uma função nativa do JS, que serve para percorrer um vetor e devolver um novo vetor ao final das iterações;  
                Utilizando o "musicas.map", estamos iterando cada música do estado "musicas";
                A cada iteração, estamos utilizando o parâmetro "musica" (qualquer nome), que representa o próprio objeto de "musica" que está sendo iterado naquele momento;
                Com uma função de callback ("arrow function" ou "função anônima"), podemos retornar um novo elemento JSX no lugar do objeto "musica" que estamos iterando no momento, para renderizá-lo na tela;
                Exemplos:
                    [1, 2, 3, 4].map( function (numero) {
                        return ( <div>Eu sou o número {numero}</div> );
                    })
                    
                    - No exemplo acima, temos um vetor com 4 posições que será iterado;
                    - Para cada item do vetor, o ".map()" retornará uma div na função anônima usada como callback;
                    - O parâmetro "numero" representa o item do vetor que está sendo iterado no momento, e será utilizado no corpo da div para interpolar seu valor e exibir o número;
            */}
    </>
  );
}

export default Musicas;
