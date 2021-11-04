let alphStrKey = "abcdefghijklmnopqrstuvwxyz! ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let cyphStrKey = "a bZeYhXlWoVpRsQtNuMcKdJfIgGiFjDkCmUnOqSrTvEwBxHyPzL!A";
let alphDict = {};
let cyphDict = {};

function createAlphaKey(){
    for(let i = 0; i < alphStrKey.length; i ++) alphDict[alphStrKey[i]] = cyphStrKey[i];
    
}
function createCypherKey(){
    for(let i = 0; i < alphStrKey.length; i ++) cyphDict[cyphStrKey[i]] = alphStrKey[i]; 
}
createAlphaKey();
createCypherKey();

function cypher(str){
    let output = "";
    for(let i = 0; i < str.length; i ++){
        if(alphDict[str[i]]){
            output += alphDict[str[i]];
        } else {
            output += str[i];
        }
    }
    return output;
}

function decypher(str){
    let output = "";
    for(let i = 0; i < str.length; i ++){
        if(cyphDict[str[i]]){
            output += cyphDict[str[i]];
        } else {
            output += str[i];
        }
    }
    return output;
}

//createAlphaKey();
let str1 = cypher("I love cryptography!the rest of this program does not have a lot of number 125 2323t5 45363456 baby how you")
console.log(str1);
console.log(decypher(str1));