import { Movies } from "./moviesModule.js";

export class Aside extends Movies {

    constructor() {
      
        super();
        
        this.fetchUrl();

    document.querySelector(".aside-tab").addEventListener("click", () => {
        if ($("aside").css("left") == "0px") {
        $("aside").animate({ left: "-220px" }, 400);
        $(".aside-tab").animate({ left: "0" }, 400);
        $(".aside-links ul li").animate({ marginTop: "50vh", opacity: "0" }, 300);
        $("#tab-icon").attr("class", "fa fa-align-justify");
        } else {
        $("aside").animate({ left: "0" }, 500);
        $(".aside-tab").animate({ left: "220px" }, 500);
        $(".aside-links ul li")
          .eq(0)
          .delay(400)
          .animate({ marginTop: "0", opacity: "1" }, 800);
        $(".aside-links ul li")
          .eq(1)
          .delay(400)
          .animate({ marginTop: "0", opacity: "1" }, 900);
        $(".aside-links ul li")
          .eq(2)
          .delay(400)
          .animate({ marginTop: "0", opacity: "1" }, 1000);
        $(".aside-links ul li")
          .eq(3)
          .delay(400)
          .animate({ marginTop: "0", opacity: "1" }, 1100);
        $(".aside-links ul li")
          .eq(4)
          .delay(400)
          .animate({ marginTop: "0", opacity: "1" }, 1200);
        $(".aside-links ul li")
          .eq(5)
          .delay(400)
          .animate({ marginTop: "0", opacity: "1" }, 1300);
        $("#tab-icon").attr("class", "fa fa-align-justify fa-times");
      }
    });
      
      
    // Here I Used Native Js Code Because Binding Is Deprecated in JQuery

    document.querySelector("#nowPlaying").addEventListener("click", e =>  {
        e.preventDefault();
        this.fetchUrl();
        this.addActive("#nowPlaying");
        this.scrollTop();
    });
      
    document.querySelector("#popular").addEventListener("click",  e => {
        e.preventDefault();
        this.fetchUrl(this.urls[0]);
        this.addActive("#popular");
        this.scrollTop();


    });
      
    document.querySelector("#topRated").addEventListener("click", e => {
        e.preventDefault();
        this.fetchUrl(this.urls[1]);
        this.addActive("#topRated");
        this.scrollTop();


    });
      
    document.querySelector("#trending").addEventListener("click", e => {
        e.preventDefault();
        this.fetchUrl(this.urls[2]);
        this.addActive("#trending");
        this.scrollTop();


    });
      
    document.querySelector("#upComing").addEventListener("click", e => {
        e.preventDefault();
        this.fetchUrl(this.urls[3]);
        this.addActive("#upComing");
        this.scrollTop();


    });
    
    document.querySelector("#contactBtn").addEventListener( "click", e => {
        this.addActive("#contactBtn");
        $("body, html").animate( {scrollTop: $("#contact").offset().top}, 2000);
    })

            

    }
    
    // Adding Active Class To Clicked Links
    addActive(anchor) {
        $(anchor).addClass("active");
        $(anchor).parent().siblings().children().removeClass("active");
    }
    
  scrollTop() {
    if ($(window).scrollTop() != 0) {
      	$("body, html").animate( {scrollTop: 0}, 2000);
      }
    }
}

