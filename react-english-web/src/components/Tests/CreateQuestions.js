import db from './db'


var state = 
{
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''        
}

//the function gets an ordered array
function createQuestions (arr, level)
{
    
    // All words are mixed
    let words = mixArray(arr)

    // All the data of a single question: question + 4 options + correct answer
    let questionArr = new Array(6)

    for (let index = 0; index < words.length; index++){
        
        questionArr[0] = words[index][1]

        questionArr[5] = words[index][0]
        getOptions( words[index][0], words ).map( (option, i) => {
            questionArr[++i] = option
        })
        
        createQuestion(questionArr)
        
        insertData(index, level)

    }
}

//Mix the words
function mixArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//The 4 options, then mix them
function getOptions(correctWord, words) {
    let arr = [correctWord] // the correct answer in index 0
    let index = 1; //4 options
    while(index < 4)
    {
        const j = Math.floor(Math.random() * (words.length));

        //Not exists in the array
        if( arr.indexOf( words[j][0]) == -1 )
        {
            arr[index] = words[j][0]
            index ++;
        }
    }
    return mixArray(arr);
}
//Controlled form elements with React
function createQuestion(arr) {

    //the hebrew question
    state.question = arr[0]

    //all 4 options of answers
    state.option1 = arr[1]

    state.option2 = arr[2]

    state.option3 = arr[3]

    state.option4 = arr[4]

    //the correct answer 
    state.answer = arr[5]
    
}

//Insert data into IndexedDB
function insertData(index, level) {
 
    //Actually Insert the data into the database
    db[level].put({
        id: index,
        question: state.question, 
        option1: state.option1,
        option2: state.option2,
        option3: state.option3,
        option4: state.option4,
        answer: state.answer
    })
};


export { createQuestions }
