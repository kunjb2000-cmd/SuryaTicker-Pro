/* ===================================================
   SuryaTicker Pro v2
   Main Application Engine
=================================================== */

const App = {

    mode: "text",

    settings: {

        label: "BREAKING NEWS",

        live: "LIVE",

        text: "SuryaTicker Pro में आपका स्वागत है",

        rss: "",

        speed: 22,

        fontSize: 28,

        height: 60,

        breakingColor: "#d50000",

        tickerColor: "rgba(0,0,0,.70)",

        textColor: "#ffffff",

        liveColor: "#ff0000"

    },

    init(){

        this.load();

        this.render();

    },

    render(){

        document.getElementById("breakingLabel").innerText=this.settings.label;

        document.querySelector(".live").innerText=this.settings.live;

        document.getElementById("news").innerHTML=this.settings.text;

        document.getElementById("news").style.fontSize=this.settings.fontSize+"px";

        document.getElementById("news").style.color=this.settings.textColor;

        document.querySelector(".breaking").style.background=this.settings.breakingColor;

        document.querySelector(".scroll").style.background=this.settings.tickerColor;

        document.querySelector(".live").style.background=this.settings.liveColor;

    },

    save(){

        localStorage.setItem(

            "SuryaTicker",

            JSON.stringify(this.settings)

        );

    },

    load(){

        let data=localStorage.getItem("SuryaTicker");

        if(data){

            this.settings=JSON.parse(data);

        }

    }

};

window.onload=function(){

    App.init();

};
