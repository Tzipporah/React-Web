import React from 'react';
import Select from 'react-select';
import './pages/Word_completion.css';
import words from '../words/levels.json'

const sentences = ({page,level}) =>
{
    let array1 = []
    words[level].map((word, index=0) => {
        array1[index++] = [word.en]
    })
    
    var technologyList = [];
    array1.map((element) =>{
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
      
      let story = ""
      function put_image(word){
        
      }
    return( 
        <div class="main">
            <div class="sentenc">
            <div class="select">
            <Select class="col-md-8 col-offset-4" options={ technologyList } styles = { customStyles } />
            </div>
            <p>{word}</p>
            <img src={picture}></img>
            </div>
        </div>
        
        
    
    );
}

export default sentences