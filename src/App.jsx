import { useState } from 'react'

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
            <button onClick={toggle}> </button>
            <input value={name} onChange={nameInput} type='text' placeholder='Enter your name here'></input>
        </div>
    );
}

export default App
