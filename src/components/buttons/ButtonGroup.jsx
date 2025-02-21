
import { useState } from "react";

import languages from "../../data/languages.js";
import Button from "./Button";


export default function ButtonGroup () {


    const [ activeLangId, setActiveLang ] = useState(1);

    const changeActiveId = (activeId) => {
        setActiveLang(activeId);
    }

    return (

        <>
            <div className="flex flex-wrap justify-between lg:justify-center items-center gap-y-3u lg:gap-x-3u">

                {/* ciclo languages per btn comp */}
                {
                    languages.map( (language) => {
                        return <Button 
                            key={language.id}
                            lang={language}
                            type={ language.id === activeLangId ? "active" : "default" }
                            // attivo funzione che imposta come linguaggio attivo l'id del button cliccato
                            onClick={ () => changeActiveId(language.id) }
                        />
                    } )
                }
            </div>
        </>

    )

}