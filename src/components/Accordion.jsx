import { useState } from "react";
import languages from "../data/languages";
import Button from "./buttons/Button";
// import ButtonGroup from "./buttons/ButtonGroup";
import TextContainer from "./TextContainer";

export default function Accordion () {

    const [ activeLangId, setActiveLang ] = useState(1);

    const changeActiveId = (activeId) => {
        setActiveLang(activeId);
    }

    return (

        <>
            <div className="flex flex-col items-center gap-5u">

                <div className="flex flex-wrap justify-between lg:justify-center items-center gap-y-3u lg:gap-x-3u">
                {
                    languages.map( (language) => {
                        return (
                            <Button 
                                key={language.id}
                                lang={language}
                                type={ language.id === activeLangId ? "active" : "default" }
                                // attivo funzione che imposta come linguaggio attivo l'id del button cliccato
                                onClick={ () => changeActiveId(language.id) }
                            />
                        
                    )})
                }
                </div>

                {/* <ButtonGroup languages={languages} /> */}
                <TextContainer languages={languages} activeLangId={activeLangId} />

            </div>
        </>

    )

}