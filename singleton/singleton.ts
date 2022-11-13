class Singleton {
    private static instance: Singleton;
    random: number;

    // we can give access to the constructor
    // no one can create a new instance of the class
    private constructor() {
        this.random = Math.random();
    };

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const singleton = Singleton.getInstance();

