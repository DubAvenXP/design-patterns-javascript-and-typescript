class WeekDays {
    daysEs = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
    ];
    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    constructor(lang) {
        this.lang = lang;

        // static property that will hold the instance
        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        // static property WeekDays
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }

    changeLang(lang) {
        this.lang = lang;
    }
}

const weekDays = new WeekDays("es");
const weekDays2 = new WeekDays("en");

console.log(weekDays.getDays());
console.log(weekDays.getDays());
