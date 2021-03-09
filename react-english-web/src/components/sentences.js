import React from 'react';
import Select from 'react-select';
import './pages/Word_completion.css';
import { Button }from './Button'


function Sentences ({page, array_picture, array_words, score, updateScore, updateQuestions, btn})
{
     //the function get from the story all the learning word ordered
    var page_list=[];
    page.match(/\b(\w+)\b/g).forEach((word) => {
        let temp_arr = to_lower_case(array_words)
        if(temp_arr.indexOf(word.toLowerCase()) > -1){
          page_list.push(word.toLowerCase())
        }   
         
    })
    
    //the function above for Select tag option
    var technologyList = [];
    array_words.forEach((element) => {
        technologyList.push({ label:element, value: element })  
    });
    //the style for Select tag
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          width: 80,
          borderBottom: '2px  green',
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? 'black' : 'white'
        }),
    
        control: (provided) => ({
          ...provided,
          marginTop: "5%",
          width: 100,
          height: 40,  
        })
      }
      //handle in select value changes, check if the correct word is selected
      function handleValueChange(val, correctVal) {
        if (val === correctVal){
          score++
          updateScore(score)
        }
      }

      //the function split the story by the words that need no be complited
      function splitMulti(str, tokens){
        var s=""
        str.split("").forEach(character => {
          if ((/[a-zA-Z]/).test(character))
            s+= character
          else
            s+=" " + character + " "
        })
        str = " " + s + " "
        var tempChar = tokens[0] + " "; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            tokens[i] = " " +tokens[i] +" "
            str = str.split(tokens[i]).join(" " +tempChar);
            str += "\t"
        }
        str = str.split(tempChar);
        return str;
      }

      //the function get list of word, and convert each word to lower case
      function to_lower_case(arr){
        let i
          for (i=0; i< arr.length; i++){
            arr[i] = arr[i].toLowerCase()
          }
          return arr
      }

      //update the num of word that need to be completed
      function handleClick() {
        updateQuestions(page_list.length)     
    }

      // Get the text divided into an array according to the words that need to be completed
      const text = splitMulti(page.toLowerCase(),to_lower_case(array_words))
      const last_index = text[text.length-1]
      const text_slice = text.slice(0,text.length-1)
      let i= 0
      let space = ' '
      const listItems = text_slice.map((line) =>
        <div class="sentence">
           <p className="story-text"><p>{space}</p> {line}</p>
           {<img src={array_picture[page_list[i]]} className='story-fig' alt="story"></img>}        
           <Select  name={page_list[i++]}  className="col-md-8 col-offset-4" options={ technologyList }  styles = { customStyles } onChange={(val, selectName) => handleValueChange(val.value, selectName.name)}  />
        </div> 
        );
    return( 
        <div class="main">
            <div class="story">
              <div className="contain-sentence">
                {listItems} 
                <br/>
                <p className = "last_index">{last_index}</p> 
              </div>
            </div>
            <Button className = "btn-senteces" onClick={handleClick}>{btn}</Button> 
        </div>     
    );
}

export default Sentences 