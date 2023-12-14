function receivesAFunction(wakeUp){
wakeUp();
}
function returnsANamedFunction(){
    return function(){
        
        console.log('sleep');
    }; 
}
function returnsAnAnonymousFunction(){
    return function(){
    console.log("An Anonymous Function");
}
}