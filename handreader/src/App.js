import React, { useState } from "react";
import './App.css';
import SimpleButton from './components/button';
import DialogBox from './components/dialog';
import Navbar from './components/navbar';
import { analyzePII } from './analyzePII';

function App() {
    const [text, setText] = useState("");
    const [piiEntities, setPiiEntities] = useState([]);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            console.log("Hey this is being called");
            const entities = await analyzePII(text);
            setPiiEntities(entities);
        } catch (error) {
            console.error("Error detecting PII:", error);
        }
    };

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <div className='dialogBox'>
                    Enter text to be checked for Personally Identifiable Information (PII)
                    <textarea 
                        className="dialogBoxInner" 
                        value={text} 
                        onChange={handleInputChange}>
                    </textarea>
                    <SimpleButton text="Submit" onClick={handleSubmit}></SimpleButton>
                    <br/><br/>
                    - or -
                    {piiEntities.length > 0 && (
                        <div className="pii-results">
                            <h3>Detected PII Entities:</h3>
                            <ul>
                                {piiEntities.map((entity, index) => (
                                    <li key={index}>
                                        {entity.Type}: {entity.Text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
