

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