import { useEffect, useState } from 'react';
import axios from 'axios';
import DictionaryContainer from './DictionaryContainer';
import '../../styles/DictionaryWidget.css'

// WARNING: Do not change the entry componenet name
function Dictionary(props) {
  const [word, setWord] = useState('');
  const [dicData, setDicData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;


  const handleClick = () => {
    axios.get(url).then((res) => {
        setDicData(res.data); 
        setLoading(false); 
    });
  };

  return (
    <>
        <div className="dic-container">
            <h1>Dictionary</h1>
          <span className="w-fit">
            <label htmlFor="dic-input">Enter the word: </label>
            <input
              id="dic-input"
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </span>
          <button className="dic-btn" onClick={handleClick}>
            Find Definition
          </button>

          {dicData.length > 0 && <DictionaryContainer data={dicData} />}
        </div>
    </>
  );
}

export default Dictionary;
