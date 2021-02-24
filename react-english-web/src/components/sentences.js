import React from 'react';
import Select from 'react-select';
import './pages/Word_completion.css';
import words from '../data/levels.json'

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
        })
      }
      
      
      function splitMulti(str, tokens){
        var tempChar = tokens[0]; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
      }
      function to_lower_case(arr){
        let i
          for (i=0; i< arr.length; i++){
            arr[i] = [arr[i][0].toLowerCase()+" "]
          }
          return arr
      }
      
      const text = splitMulti(page.toLowerCase(),to_lower_case(array1) )
      const last_index = text[text.length-1]
      const text_slice = text.slice(0,text.length-1)
      const listItems = text_slice.map((line) =>
        <div class="sentenc">
           <p>{line}</p>
           <Select class="col-md-8 col-offset-4" options={ technologyList } styles = { customStyles } />
        </div> 
        );
    return( 
        <div class="main">
            <div class="story">
            <div>{listItems} <p>{last_index}</p> </div>
            </div>
        </div>     
    );
}

export default sentences