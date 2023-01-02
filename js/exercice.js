/*****   Daily Challenge: Words In The Stars
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * Instructions
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

stars and words

 * ***/

let words = prompt("Enter somme few words separated bye commas");

let wordsArray = words.split(",");

console.log(wordsArray);

const lengthOfLongestWord = getLengthOfLongestWord();

displayRows();

//creation de la delimitation de mots

function displayRows(){
    const delimiterRow = createDelimiterRow(); 
    console.log(delimiterRow);
    for (const word of wordsArray){
        displayWord(word);
    }
    console.log(delimiterRow); 
}

//affichage de mots en fonction des espaces

function displayWord(word){ 
    let nbreLongestWordsActualWord = lengthOfLongestWord - word.trim().length

let affword = "* " + word.trim()

for (let index = 0; index < nbreLongestWordsActualWord; index++) {
    
    affword +=" ";
    
}
affword +=" *";
    console.log(affword)
}

//ecriture de la fonction avoir la taille du mot

function getLengthOfLongestWord(){
    let lengthOfLongestWord=0;
    for (const word of wordsArray){
    const wordLength = word.trim().length;
    if (wordLength > lengthOfLongestWord) {
        lengthOfLongestWord = wordLength;
    } 
} 
        return lengthOfLongestWord;
}


//const firstRow = createFirstRow();

// edition de la fonction

function createDelimiterRow() {
    const numberOfStarsOnFirstRow = lengthOfLongestWord;
    let row ="**";
    for (let i = 0; i < numberOfStarsOnFirstRow; i++){
        row = row + "*";
    }
    row += "**"
   return row;
}



