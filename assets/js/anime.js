const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        for (let j = 0; j < options.length; j++) {
            if (options[j].classList.contains("selected")) {
                options[j].classList.remove("selected");
            }
        }

        // PA

        options[i].classList.add("selected");
        for (let k = 0; k < options.length; k++) {
            options[k].classList.add("selectall");
        }

        let forVal = options[i].getAttribute("for");
        let selectInput = document.querySelector("#" + forVal);
        let getAtt = selectInput.getAttribute("type");
        if (getAtt == "checkbox") {
            selectInput.setAttribute("type", "radio");
        } else if (selectInput.checked == true) {
            options[i].classList.remove("selected");
            selectInput.setAttribute("type", "checkbox");
        }

        let array = [];
        for (let l = 0; l < options.length; l++) {
            if (options[l].classList.contains("selected")) {
                array.push(l); // PA
            }
        }
        if (array.length == 0) {
            for (let m = 0; m < options.length; m++) {
                options[m].removeAttribute("class"); // PA
            }
        }
    });
}


// countdown section
// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Nov 28, 2022 13:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick() {
    // Get current time
    let now = new Date().getTime();
    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;

    // Check if time is above 0
    if (t > 0) {
        // Setup Days, hours, seconds and minutes
        // Algorithm to calculate days...
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10) { days = "0" + days; }

        // Algorithm to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        // Algorithm to calculate minutes
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        // Algorithm to calc seconds
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        // Create Time String
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        // Set time on document
        document.querySelector('.countdown').innerText = time;
    }
}