function Card({children}){
    const style = {
        border: "2px solid black",
        padding: "10px",
        margin: "5px",
        width: "fit-content",
        backgroundColor: "rgba(58, 96, 160, 1)",
        color: "white"
    };

    return(
        <div style={style}>{children}</div>
    );
}

export default Card