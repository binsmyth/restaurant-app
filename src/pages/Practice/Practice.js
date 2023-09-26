import React, { useState } from 'react';

const Practice = () =>{
    const [result,setResult] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [word, setWord] = useState('');
    const [keyword, setKeyword] = useState('');
    function increase(){
        if(result > 0){
            setIsDisabled(false);
        }
        setResult(result+1);
        console.log("Result increase is " + result + " " + isDisabled);
    }
    function decrease(){
        if (result == 0 ){
            setIsDisabled(true);
            return;
        }
        if(result > 0){
            setIsDisabled(false);
        }   
        setResult(result -1);
        console.log("Result decrease is " + result + " " + isDisabled);
    }
    function getWord(){
        
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + keyword)
            .then((response) => response.json())
            .then((data) => setWord(data[0].meanings[0].definitions[0].definition))
    }
    return(
        <div>
            <p>Practice</p>
            <button onClick={increase}>+</button>
            <button disabled = {isDisabled} onClick={decrease}>-</button>
            <span>{result}</span>
            <br/>
            <input
                name='word'
                type="text" 
                id="input-text-word" 
                required
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={getWord}>Get</button>
            <span>{word}</span>
        </div>
    )
}

export default Practice;