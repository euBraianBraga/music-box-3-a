import React from "react";

import Participante from "../components/Participante"; // importando componente Participante

function Votacao() { // função que representa o componente <Votacao />, que será exportado ao final
    return (
        <> 

            <Participante nome="Méqui" /> <br />
            <Participante nome="BK" /> <br />
            <Participante nome="Papais" /> <br />

        </>
    );  
}

export default Votacao; // exportando componente Votacao para ser usado em outros módulos