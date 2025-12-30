function Card({children}){
    const style = {
        border: "2px solid black",
        padding: "10px",
        margin: "3px"
    };

    return(
        <div style={style}>{children}</div>
    );
}

export default Card