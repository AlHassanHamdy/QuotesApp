var quotesArray = 
[
{

    title : '"It is not what happens to you, but how you react to it that matters."',
    author : '--Epictetus',
},
{
    title : '"Resentment is like drinking poison and waiting for your enemies to die.."',
    author : '--Nelson Mandela',

    
},
{
    title :'"You miss 100% of the shots you do not take."',
    author : '--Wayne Gretzy',

    
},
{
    title : '"Do not take life too seriously. You will not get out alive."',
    author : '--Epictetus'
    
}
]


function randomNumber(min , max)
{
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}


function getCode()
{
    var index = randomNumber(1,4)-1;
    document.getElementById("title").innerHTML = quotesArray[index].title;
    document.getElementById("author").innerHTML = quotesArray[index].author;

}
