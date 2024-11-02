import React from 'react';
import { AiFillSound } from 'react-icons/ai';
import "../../styles/DictionaryWidget.css"

const handlePronunciation = (data) => {
  const audioUrl = data[0]['phonetics'][0]['audio'];
  const audio = new Audio(audioUrl);

  audio.play();
};

const DictionaryContainer = ({ data }) => {
  return (
    <div>
      <span className="dic-head">
        <h1 className="dic-word">{data[0]['word'].toUpperCase()}</h1>
        <AiFillSound
          className="pronunciation-icon"
          onClick={() => handlePronunciation(data)}
        />
      </span>
      {data[0]['meanings'].map((item, index) => {
        return (
          <div className="meaning-container" key={item}>
            <h2 className="dic-subhead">{item['partOfSpeech']}</h2>
            {item['definitions'].map((defn, index) => {
              return (
                <div>
                  <p key={index}>: {defn['definition']}</p>
                </div>
              );
            })}
            <h2 className='dic-subhead'>Synonyms: </h2>
            {item['synonyms'] &&
              item['synonyms'].map((syn, index) => {
                return (
                  <span key={syn}>
                    {syn}, 
                  </span>
                );
              })}
            <h2 className='dic-subhead'>Antonyms: </h2>
            {item['antonyms'] &&
              item['antonyms'].map((ant, index) => {
                return (
                  <span key={ant}>
                    {ant}, 
                  </span>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default DictionaryContainer;
