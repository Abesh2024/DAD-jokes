// let jokes = document.querySelector("#joke");
// let btn = document.querySelector("#joke-change")
// btn.addEventListener("click", clickModular);

// function clickModular(){
//     let joke = " ";

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', "https://api.api-ninjas.com/v1/dadjokes?limit=1");
//     xhr.setRequestHeader('X-Api-key', "/kKbBkDCP6NzStP5TmuARQ==weULnBZuaArhNg8n");
//     xhr.send();

//     btn.innerText = "Fetching jokes...";

//     xhr.onload = function(){
//         if(xhr.status === 200){
//             const result = JSON.parse(xhr.responseText);
//             console.log(result);
//             joke = result[0].joke;
            
//             // update the jokes in
//             jokes.innerText = joke;

//             btn.innerText = "Tell Me A Joke";
//         }
//     }
// }


// let getUrl ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

// async function clickModular () {
//     let joke = " ";

//     let request = await fetch(getUrl);
//     let get = await request.json()
// }

let jokes = document.querySelector("#joke");
let btn = document.querySelector("#joke-change");

btn.addEventListener("click", clickModular);

async function clickModular() {
    let joke = " ";

    btn.innerText = "Fetching jokes...";

    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
        headers: {
            'X-Api-key': '/kKbBkDCP6NzStP5TmuARQ==weULnBZuaArhNg8n'
        }
    });

    if (response.ok) {
        const result = await response.json();
        joke = result[0].joke;
        // console.log(joke)
        jokes.innerText = joke;
    } else {
        console.error('Network response was not ok');
        jokes.innerText = "Failed to fetch joke";
    }

    btn.innerText = "Tell Me A Joke";
}

