import React from 'react';
import Select from 'react-select';
import './pages/Word_completion.css';
import words from '../words/level1'

const sentences = ({word,picture,sentece}) =>
{
    let array1 = []
    words.words.map((word) => {
        array1[word.i] = [word.en]
    })
    
    var technologyList = [];
    array1.forEach(function(element) {
        technologyList.push({ label:element, value: element })
    });

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          width: 80,
          borderBottom: '2px  green',
          color: state.isSelected ? 'yellow' : 'black',
          backgroundColor: state.isSelected ? 'green' : 'white'
        }),
    
        control: (provided) => ({
          ...provided,
          marginTop: "5%",
          width: 100,
          height: 40,
          right: -100,
        })
      }
      

    return( 
        <div class="main">
            <div class="sentenc">
            <div class="select">
            <Select class="col-md-8 col-offset-4" options={ technologyList } styles = { customStyles } />
            </div>
            <p>{sentece}</p>
            <img src={picture}></img>
            </div>
        </div>
        
        
    
    );
}

export default sentences