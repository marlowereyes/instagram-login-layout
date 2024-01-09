export default function Button ({
    title="Default",
    fontFamily="var(--main-font)"
}){
    return(
        <button style={{fontFamily: fontFamily}}>{title}</button>
    )
}