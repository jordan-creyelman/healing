export class Chat {
    constructor() {
        this.miaulerEnCours = false;
        this.intervalId = null;
    }

    miauler() {
        if (!this.miaulerEnCours) {
            this.miaulerEnCours = true;
            this.intervalId = setInterval(() => {
                console.log("Miaou!");
            }, 2000);
        }
    }

    arreterMiauler() {
        if (this.miaulerEnCours) {
            this.miaulerEnCours = false;
            clearInterval(this.intervalId);
        }
    }
}