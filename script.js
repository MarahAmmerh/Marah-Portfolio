const themeButton = document.getElementById("themeToggle");

let dark = false;

themeButton.onclick = () => {

    if(!dark){

    // Dark Mode
    document.documentElement.style.setProperty("--bg","#0B1120");
    document.documentElement.style.setProperty("--card","#1F2937");
    document.documentElement.style.setProperty("--text","#E5E7EB");
    document.documentElement.style.setProperty("--gray","#9CA3AF");
    document.documentElement.style.setProperty("--nav","rgba(17,24,39,.85)");

    themeButton.innerHTML="☀️";

}

else{

    // Light Mode
    document.documentElement.style.setProperty("--bg","#F8FAFC");
    document.documentElement.style.setProperty("--card","#FFFFFF");
    document.documentElement.style.setProperty("--text","#111827");
    document.documentElement.style.setProperty("--gray","#6B7280");
    document.documentElement.style.setProperty("--nav","rgba(255,255,255,.85)");

    themeButton.innerHTML="🌙";

}

dark=!dark;

};



// Image Lightbox

function openLightbox(imagePath){

    let lightbox = document.getElementById("lightbox");

    let image = document.getElementById("lightbox-img");


    image.src = imagePath;

    lightbox.style.display = "flex";

}


window.onload = function(){

    document.getElementById("closeLightbox").onclick = function(){

        document.getElementById("lightbox").style.display = "none";

    };

};



document.getElementById("lightbox").onclick = function(e){

    if(e.target.id === "lightbox"){

        document.getElementById("lightbox").style.display = "none";

    }

};

console.log("Lightbox script loaded");

const postsBtn = document.getElementById("postsBtn");

if(postsBtn){

    postsBtn.onclick = function(){

        const hiddenPosts = document.querySelectorAll(".more-posts");

        const isHidden = hiddenPosts[0].style.display !== "block";

        hiddenPosts.forEach(post=>{

            post.style.display = isHidden ? "block" : "none";

        });

        postsBtn.innerHTML = isHidden
            ? "▲ Show Less"
            : "▼ View More (12)";

    };

}


const storiesBtn = document.getElementById("storiesBtn");

if(storiesBtn){

    let storiesOpen = false;

    storiesBtn.onclick = () => {

        document.querySelectorAll(".more-stories")
        .forEach(item=>{

            item.style.display = storiesOpen ? "none" : "block";

        });


        storiesOpen = !storiesOpen;


        storiesBtn.innerHTML = storiesOpen 
        ? "▲ View Less"
        : "▼ View More (10)";

    };

}



const postersBtn = document.getElementById("postersBtn");

if(postersBtn){

    let postersOpen = false;

    postersBtn.onclick = () => {

        document.querySelectorAll(".more-posters")
        .forEach(item=>{

            item.style.display = postersOpen ? "none" : "block";

        });


        postersOpen = !postersOpen;


        postersBtn.innerHTML = postersOpen 
        ? "▲ View Less"
        : "▼ View More (11)";

    };

}
