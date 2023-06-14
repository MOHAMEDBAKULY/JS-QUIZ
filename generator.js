function generatorSentence(desc, arr) {
    let sentence = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0;i <arr.length; i++ ){
        if(i === lastIndex){
           sentence += arr[i] 
        } else{
           sentence += arr[i] + ", "  
        }
        
    }
    return sentence
}

const anwser = generatorSentence("highest Mountain", ["Mount Everest", "K2"])
console.log(anwser)