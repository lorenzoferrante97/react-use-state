
import languages from "../../data/languages.js";
import Button from "./Button";


export default function ButtonGroup () {

    return (

        <>
            <div className="flex flex-wrap justify-center items-center gap-4">

                {/* ciclo languages per btn comp */}
                {
                    languages.map( (language) => {
                        return <Button 
                            key={language.id}
                            lang={language}
                            type={`${language.id === 1 ? 'active' : 'default'}`}
                        />
                    } )
                }
            </div>
        </>

    )

}