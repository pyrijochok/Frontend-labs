const elementSix = document.getElementById("elementSix");
const elementSeven = document.querySelector("#elementSeven");

let nSix = 0;
let nSeven =0;
elementSix.addEventListener("click",(e)=>{
    nSix=nSix+1;
    e.target.style.backgroundColor = "purple";
    e.target.style.color = "yellow"
    if(nSix==2){
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "purple"
        nSix=0;
    }
});

elementSeven.addEventListener("click",(e)=>{
    nSeven=nSeven+1;
    e.target.style.backgroundColor = "greenYellow";
    e.target.style.color = "blue";
    if(nSeven==2){
        e.target.style.backgroundColor = "blue";
        e.target.style.color = "greenYellow";
        nSeven=0;
    }
});

const addImg = ()=>{
    const imgContainer = document.getElementById("img");
    const img = document.createElement("img");
    img.setAttribute("src","img/Heidelberg_corr.jpg");
    imgContainer.appendChild(img);
}

const smallerImg = ()=>{
    const img = document.querySelector("#img img")
    if(img){
         if(img.width>100){
            img.style.width = `${img.width - 100}px`;
         }else{
            alert("image is too small")
         }

    }
   
}

const biggerImg = ()=>{
    const img = document.querySelector("#img img")
    if(img.width<2000){
        img.style.width = `${img.width + 100}px`;
     }else{
        alert("image is too big")
     }
   
}

const removeImg = ()=>{
    const img = document.querySelector("#img img");
    if (img){
        img.remove();
    }
    
}