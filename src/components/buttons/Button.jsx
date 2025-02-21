
// import { useState } from "react";

export default function Button (props) {

    // // settare pulsante come active o default
    // const changeType = () => {
    //     setType( currentType === "active" ? "default" : "active" )
    // }

    const { lang, type, onClick } = props;
    const title = lang.title;
    // const [ currentType, setType ] = useState(type);


    return (

        <>
            <button onClick={onClick} className={
                `
                    px-7u py-4u rounded-md basis-[48%] md:basis-[32%] lg:basis-auto
                    ${type === "active" ? "bg-amber-300" : "bg-blue-200"}
                `
                }>{title}</button>
        </>

    )

}