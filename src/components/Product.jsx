import Card from './Card'

function Product({title, price}){
    return(
        <Card>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </Card>
    );
}

export default Product