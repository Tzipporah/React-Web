import React from 'react';
import Select from 'react-select';
import './pages/Word_completion.css';
import words from '../data/levels.json'
//import { handleInputChange } from 'react-select/src/utils';

const sentences = ({page,level, score, updateScore, updateQuestion,question }) =>
{
     //declare the array of the words picture
     let array_picture = []
     words[level].map((word, index) => {
       array_picture[word.en.toLowerCase()] = word.picture
     })
    let array1 = []
    words[level].map((word, index) => {
        array1[index++] = word.en
    })
    var page_list=[];
    //the function get from the story all the learning word ordered
    page.match(/\b(\w+)\b/g).map((word) => {
        let temp_arr = to_lower_case(array1)
        if(temp_arr.indexOf(word.toLowerCase()) > -1){
          page_list.push(word.toLowerCase())
        }      
    })
   // update() 
    function update(){
      question+= page_list.length
      updateQuestion(question)
    }
    //the function above for Select tag
    var technologyList = [];
    array1.map((element) =>{
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
          
        console.log(score, val, correctVal);  
      }

      function splitMulti(str, tokens){
        str = " " +str.replace(/[^a-zA-Z ]/g, " ") 
        console.log(str);
        var tempChar = tokens[0] + " "; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            tokens[i] = " " +tokens[i] +" "
            str = str.split(tokens[i]).join(" " +tempChar);
            str += "\t"
        }
        str = str.split(tempChar);
        console.log(str);
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
      const text = splitMulti(page.toLowerCase(),to_lower_case(array1) )
      console.log(page_list)
      const last_index = text[text.length-1]
      const text_slice = text.slice(0,text.length-1)
      let i= 0
      const listItems = text_slice.map((line) =>
        <div class="sentence">
           <p>{line}</p>
           <img src={array_picture[page_list[i]]}/>
           <Select name={page_list[i++]} className="col-md-8 col-offset-4" options={ technologyList } styles = { customStyles } onChange={(val, selectName) => handleValueChange(val.value, selectName.name)}  />
        </div> 
        );
    return( 
        <div class="main">
            <div class="story">
              <div>
                {listItems} 
                <br/>
                <p className = "last_index">{last_index}</p> 
              </div>
            </div>
        </div>     
    );
}

export default sentences 