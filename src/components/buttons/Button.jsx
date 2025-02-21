


export default function Button (props) {

    const { lang, type } = props;
    const title = lang.title;

    return (

        <>
            <button className={
                `
                    px-7u py-4u rounded-md
                    ${type === "active" ? "bg-amber-300" : "bg-blue-200"}
                `
                }>{title}</button>
        </>

    )

}