let jokes = document.querySelector("#joke");
let btn = document.querySelector("#joke-change")
btn.addEventListener("click", jokeChange);

// function jokeChange() {
//     let empty = " ";

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");
//     xhr.setRequestHeader("X-Api-key", "/lmdfFM2+KXR+MouNOsnrUw==pbQhlpDwI7LskIIo");
//     xhr.send();
//     btn.innerText = "loading..."
//     xhr.onload = function(){
//         if(xhr.status === 200){
//             const result = JSON.parse(xhr.responseText);
//             empty = result[0].empty;
//             jokes.innerText = empty;
//             btn.innerText = "tell me a joke";
//         }
//     };
// }

function clickModular(){
    let joke = " ";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.api-ninjas.com/v1/dadjokes?limit=1");
    xhr.setRequestHeader('x-Api-key', "/lmdfFM2+KXR+MouNOsnrUw==pbQhlpDwI7LskIIo");
    xhr.send();

    btn.innerText = "Fetching jokes...";

    xhr.onload = function(){
        if(xhr.status === 200){
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke;
            
            // update the jokes in
            jokes.innerText = joke;

            btn.innerText = "Tell Me A Joke";
        }
    };
}