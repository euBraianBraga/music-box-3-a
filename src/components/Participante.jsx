import React from "react";

function Participante (props) { // função que representa o componente <Participante />, que será exportado ao final

    const [votos, setVotos] = React.useState(0);

    function votar() {
        setVotos(votos + 1); // alterando estado "votos"
    }

    return (
        <>
            <h1>{props.nome}</h1>
            <h2>Votos: {votos}</h2>
            <button onClick={votar}>Votar</button>

        </>
    );
}

export default Participante;// exportando componente Participante para ser usado em outros módulos