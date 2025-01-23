// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    const audio = document.querySelector(".audioPlayer");

    button.addEventListener("click", function() {
        if (audio.paused){
            audio.play();
            button.classList.add("playing")
        } else {
            audio.pause();
            button.classList.remove("playing");
        }

      
    });
  });


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttonmain");
    const audio = document.querySelector(".audioPlayer");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            if (audio.paused) {
                buttons.forEach((btn) => btn.classList.remove("playing"));

                audio.play();
                button.classList.add("playing");
            } else {
                audio.pause();
                button.classList.remove("playing");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttonmain1");
    const audio = document.querySelector(".audioPlayer");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            if (audio.paused) {
                buttons.forEach((btn) => btn.classList.remove("playing"));

                audio.play();
                button.classList.add("playing");
            } else {
                audio.pause();
                button.classList.remove("playing");
            }
        });
    });
});

  

//   document.addEventListener("DOMContentLoaded", function() {
//     const button = document.querySelector(".buttonmain");
//     const audio = document.querySelector(".audioPlayer");

//     button.addEventListener("click", function() {
//         if (audio.paused){
//             audio.play();
//             button.classList.add("playing")
//         } else {
//             audio.pause();
//             button.classList.remove("playing");
//         }

      
//     });
//   });

//   document.addEventListener("DOMContentLoaded", function() {
//     const button = document.querySelector(".buttonmain1");
//     const audio = document.querySelector(".audioPlayer");

//     button.addEventListener("click", function() {
//         if (audio.paused){
//             audio.play();
//             button.classList.add("playing")
//         } else {
//             audio.pause();
//             button.classList.remove("playing");
//         }

      
//     });
//   });
// document.addEventListener("DOMContentLoaded", function () {
//     // Select all buttons with the class "buttonmain"
//     const buttons = document.querySelectorAll(".buttonmain");

//     buttons.forEach((button, index) => {
//         // Create or select a unique audio element for each button
//         const audio = new Audio(`images/BABYMONSTER - 'DRIP' MV.mp3${index + 1}.mp3`); // Adjust file path as needed

//         button.addEventListener("click", function () {
//             // Check if the audio is paused or playing
//             if (audio.paused) {
//                 // Pause any other audio that may be playing
//                 buttons.forEach((btn) => btn.classList.remove("playing"));
//                 document.querySelectorAll("audio").forEach((aud) => aud.pause());

//                 // Play the current audio
//                 audio.play();
//                 button.classList.add("playing");
//             } else {
//                 // Pause the current audio
//                 audio.pause();
//                 button.classList.remove("playing");
//             }
//         });
//     });
// });
