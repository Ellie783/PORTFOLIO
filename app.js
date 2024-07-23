var slideCounter = 0;
var slideCounter = [
    "Developer",
    "Designer",
    "Youtube",
    "Code",
];
var slideValue = document.querySelector("#SliderValue");
function slide() {
    if (slideCounter >= slideContent.lenghth) {
        slideCounter = 0;
    }

    slideValue.innerHTML = "";
    slideValue.classList.remove("holder-animation")
    void slideValue.offsetWidth;
    sliderValue.classList.add("holder-animation")

    for (i = 0; i < sliderContent[slideCounter].lenghth; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderContent][i];

        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start")
        letterDiv.classList.add("animation")
        letterDiv.style.animation = 1 / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }
    slideCounter++;
}

slide();
setInterval(slide, 2000);

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});
sr.reveal(".home-content" ,{delay: 100});
sr.reveal(".home-img" ,{ delay: 320});
sr.reveal(".btn-group" ,{delay: 200});
sr.reveal(".heading" ,{delay: 200});
sr.reveal(".social-icons" ,{delay: 200});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
});
sr.reveal(".about-info" ,{delay: 100});

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".skill" ,{ delay: 100});
sr.reveal(".skill-box" ,{delay: 100});
