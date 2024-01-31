url = "https://api.imgflip.com/get_memes"
fetch(url).then(g=>g.json()).then(
    g=>{
        memeNum = Math.floor(Math.random() * g.data.memes.length)
        document.getElementById("meme").style.backgroundImage = "url('" + g.data.memes[memeNum].url + "')"

        magassag = g.data.memes[memeNum].height
        szelesseg = g.data.memes[memeNum].width
        if (magassag > 500) {
            console.log(magassag)
            szelesseg = szelesseg / magassag * 500
            magassag = 500

        }

        document.getElementById("meme").style.width = szelesseg + "px"
        document.getElementById("meme").style.height = magassag + "px"
        console.log(g.data.memes[memeNum])

    })
mousePos = { x: 0, y: 0 }
window.addEventListener('contextmenu', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    console.log(`(${mousePos.x}, ${mousePos.y})`);
    document.body.innerHTML+=`<textarea onclick="katt(this)" style="position: absolute; left: ${mousePos.x}px; top: ${mousePos.y}px; background-color: white"></textarea>`
  });

  function katt(elem){
    if (elem.style.backgroundColor == "white") {
        elem.style.backgroundColor = "black"
        elem.style.color = "white"
    }
    else if (elem.style.backgroundColor == "black") {
        elem.style.backgroundColor = "transparent"
        elem.style.color = "white"
    }
    else if (elem.style.backgroundColor == "transparent" && elem.style.color == "white") {
        elem.style.backgroundColor = "transparent"
        elem.style.color = "black"
    }
    else if (elem.style.backgroundColor == "transparent" && elem.style.color == "black") {
        elem.style.backgroundColor = "white"
        elem.style.color = "black"
    }
  }