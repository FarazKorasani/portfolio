// rotation nav logic
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));



// ===================================================This is for the touch problem
// Get all elements with the class 'work'
var works = document.querySelectorAll('.work');

//   // Iterate over each 'work' element
//   works.forEach(function(work) {
//     // Add a touchstart event listener
//     work.addEventListener('touchstart', function() {
//       // Apply styles when touched
//       this.querySelector('img').style.transform = 'scale(1.1)';
//       this.querySelector('.layer').style.height = '100%';
//     });
//   });
// ===================================================This is for the touch problem



// about history logic
const tablinks = document.getElementsByClassName("about-tab-links");
const tabcontents = document.getElementsByClassName("about-tab-contents");

const opentab = (tabname) => {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};


// work see-more button logic
document.addEventListener("DOMContentLoaded", () => {
  const btnSeeMore = document.querySelector(".btn-see-more");
  const hiddenWorkDivs = document.querySelectorAll(".hidden");

  btnSeeMore.addEventListener("click", () => {
    hiddenWorkDivs.forEach(function (div) {
      div.classList.toggle("hidden");
    });

    if (btnSeeMore.innerText === "See More") {
      btnSeeMore.innerText = "See Less";
    } else {
      btnSeeMore.innerText = "See More";
    }
  });
});


// form logic
const scriptURL = "https://script.google.com/macros/s/AKfycbzd2XH_LQCWyfm4zg5PGPcrj5XT6tmI9grsiQPx3_9mYy4flC7_KYYg01MojiEMxPFW9A/exec"; // add your own app script link here
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// mobile touchmove logic
const workImgs = document.querySelectorAll(".work-image");
const layers = document.querySelectorAll(".layer");

workImgs.forEach(workImg => {
  workImg.addEventListener("touchmove", e => {
    workImgs.forEach(img => {
      img.classList.remove("mobile-touchmove-image");
    });
    workImg.classList.add("mobile-touchmove-image");
    layers.forEach(layer => {
      layer.classList.remove("mobile-touchmove-layer");
    });
    const index = Array.from(workImgs).indexOf(workImg);
    layers[index].classList.add("mobile-touchmove-layer");
  });
});



