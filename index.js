

sentenceFunc("i am the goat");




function sentenceFunc(sentence){
    sentence.toLowerCase();
    let wordCount = 0
    let characterCount = 0;
    let vowelCount = 0;

    const sentenceStrip = sentence.replace(/[^a-zA-Z0-9 ]/g, "")
    const onlyCharacters = sentenceStrip.replace(/ /g, "") 
    characterArray = onlyCharacters.split("");

    for(let i = 0; i < characterArray.length;i++){
        if ("aeiou".includes(characterArray[i])){
            vowelCount++;
        }
    }
    characterCount = onlyCharacters.length;
    wordCount = sentence.split(" ").length;
    console.log(wordCount);
    console.log(characterCount);
    console.log(vowelCount);
}

