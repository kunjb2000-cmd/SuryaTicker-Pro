/* ==================================================
   SuryaTicker Pro V2
   App Engine - Part 1
================================================== */

const App = {

    version: "2.0",

    settings: {

        mode: "text",

        label: "BREAKING NEWS",

        live: "LIVE",

        text: "Welcome to SuryaTicker Pro",

        rss: "",

        speed: 22,

        fontSize: 28,

        tickerHeight: 60,

        breakingColor: "#d50000",

        tickerColor: "rgba(0,0,0,.70)",

        textColor: "#ffffff",

        liveColor: "#ff0000"

    },

    init(){

        this.load();

        this.bind();

        this.render();

    },

    bind(){

        const btn=document.getElementById("btnLabel");

        if(btn){

            btn.onclick=()=>{

                const txt=document.getElementById("labelText").value.trim();

                if(txt!=""){

                    this.settings.label=txt;

                    this.save();

                    this.render();

                }

            }

        }

    },

    render(){

        document.getElementById("breakingLabel").innerText=this.settings.label;

        document.getElementById("liveLabel").innerText=this.settings.live;

        const news=document.getElementById("news");

        news.innerHTML=this.settings.text;

        news.style.fontSize=this.settings.fontSize+"px";

        news.style.color=this.settings.textColor;

        news.style.animationDuration=this.settings.speed+"s";

        document.querySelector(".breaking").style.background=this.settings.breakingColor;

        document.querySelector(".scroll").style.background=this.settings.tickerColor;

        document.querySelector(".live").style.background=this.settings.liveColor;

        document.getElementById("ticker").style.height=this.settings.tickerHeight+"px";

    },

    save(){

        localStorage.setItem(

            "SuryaTickerPro",

            JSON.stringify(this.settings)

        );

    },

    load(){

        const data=localStorage.getItem("SuryaTickerPro");

        if(data){

            this.settings=JSON.parse(data);

        }

    }

};

window.onload=()=>{

    App.init();

};
