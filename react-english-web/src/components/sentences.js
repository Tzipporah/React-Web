import React from 'react';
import Select from 'react-select';
import './pages/Word_completion.css';
import StoryImage from './StoryImage'

//import { handleInputChange } from 'react-select/src/utils';

const sentences = ({page, array_picture, array_words, score, updateScore}) =>
{
    var page_list=[];
    //the function get from the story all the learning word ordered
    page.match(/\b(\w+)\b/g).forEach((word) => {
        let temp_arr = to_lower_case(array_words)
        if(temp_arr.indexOf(word.toLowerCase()) > -1){
          page_list.push(word.toLowerCase())
        }      
    })
  
    //the function above for Select tag
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
     
      function handleValueChange(val, correctVal) {
        if (val === correctVal){
          score++
          updateScore(score)
        }
      }

      function splitMulti(str, tokens){
        str = " " +str.replace(/[^a-zA-Z_]/g, " ") 
        var tempChar = tokens[0] + " "; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            tokens[i] = " " +tokens[i] +" "
            str = str.split(tokens[i]).join(" " +tempChar);
            str += "\t"
        }
        str = str.split(tempChar);

        return str;
      }
      function to_lower_case(arr){
        let i
          for (i=0; i< arr.length; i++){
            arr[i] = arr[i].toLowerCase()
          }
          return arr
      }

      //Get the text divided into an array according to the words that need to be found
      const text = splitMulti(page.toLowerCase(),to_lower_case(array_words))
      const last_index = text[text.length-1]
      const text_slice = text.slice(0,text.length-1)
      let i= 0
      const listItems = text_slice.map((line) =>
        <div class="sentence">
           <p>{line}</p>
           {/* <img src={array_picture[page_list[i]]}></img> */}
           <StoryImage img={array_picture[page_list[i]]}/>
           <Select name={page_list[i++]}  className="col-md-8 col-offset-4" options={ technologyList } styles = { customStyles } onChange={(val, selectName) => handleValueChange(val.value, selectName.name)}  />
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
        </div>     
    );
}

export default sentences 