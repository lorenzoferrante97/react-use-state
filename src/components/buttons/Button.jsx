


export default function Button (props) {

    const { lang, type } = props;
    const title = lang.title;

    return (

        <>
            <button className="px-7u py-4u rounded-md">{title}</button>
        </>

    )

}