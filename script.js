// class AnalogClock {
//     setInterval(setClock, 500)

//     function setClock() {
//         const currentDate = new Date()
//         const secondsRatio = currentDate.getSeconds() / 60
//         const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//         const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//     }
// };

setInterval(setClock, 500)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

class DigitalClock {
    constructor(element) {
        this.element = element;
        // console.log(this.element);
    }

    start() {
        this.update();
        
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minutesFormatted = parts.minute.toString().padStart(2, "0");
        const secondsFormatted = parts.second.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minutesFormatted}:${secondsFormatted}`;
        const amPm = parts.isAM ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
        // console.log(timeFormatted);
    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            second: now.getSeconds(),
            isAM: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".digital");
const clockObject = new DigitalClock(clockElement);

// console.log(clockObject.getTimeParts());
clockObject.start();
setClock();