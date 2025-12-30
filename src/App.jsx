import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
    const [showProducts, setShowProducts] = useState(false);
    const [name, setName] = useState("");
    
    const toggle = () => {
        setShowProducts(!showProducts);
    }

    const nameInput = (event) => {
        setName(event.target.value);
    }

    return(
        <div>
            <h1>Product Dashboard</h1>
            <button onClick={toggle}>{showProducts ? "Hide Products" : "Show Products"}</button>
            <input value={name} onChange={nameInput} type='text' placeholder='Enter your name here'></input>
            <p>Hello, {name}</p>
            {showProducts && <ProductList></ProductList>}
        </div>
    );
}

export default App
