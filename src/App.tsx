import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
function App() {
  
    const [textData, setTextData] = useState<string | null>(null);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/polls/a')
        .then(response => response.text())
        .then(data => {
          setTextData(data);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });
    }, []);
  


  return (
    <>
      <div>
        
      {textData} 

      </div>
     
    </>
  )
}

export default App
