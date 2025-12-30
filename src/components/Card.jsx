function Card({children}){
    const style = {
        border: "2px solid black",
        padding: "10px",
        margin: "5px",
        width: "fit-content",
        color: "white"
    };

    return(
        <div style={style}>{children}</div>
    );
}

export default Card