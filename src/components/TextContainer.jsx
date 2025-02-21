

export default function TextContainer (props) {

    const { languages, activeLangId } = props;

    const activeLang = languages.find( (lang) => {
        return lang.id === activeLangId;
    } )

    return (

        <>
            <div className="border-2 bg-yellow-50 w-full border-yellow-200 p-5u rounded-lg gap-3u flex justify-center items-center lg:max-w-[80%]">
                {/* <p className="text-xl uppercase">{}</p>
                <p className="font-light">{}</p> */}

                <div key={activeLang.id} className="w-full">
                    <p className="text-xl uppercase">{activeLang.title}</p>
                    <p className="font-light">{activeLang.description}</p>
                </div>

            </div>
        </>

    )

}