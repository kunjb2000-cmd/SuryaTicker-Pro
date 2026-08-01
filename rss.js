async function loadRSS() {

const url="https://api.allorigins.win/raw?url="+encodeURIComponent("https://feeds.bbci.co.uk/news/world/rss.xml");

try{

const res=await fetch(url);

const xml=await res.text();

const parser=new DOMParser();

const data=parser.parseFromString(xml,"text/xml");

const items=data.querySelectorAll("item");

let headlines=[];

items.forEach(item=>{

headlines.push(item.querySelector("title").textContent);

});

document.getElementById("news").innerHTML=headlines.join(" ◆ ");

}catch(e){

document.getElementById("news").innerHTML="RSS Loading Failed";

}

}

loadRSS();
