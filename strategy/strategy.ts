interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

// ********************

// Strategies

// Strategy 1

class LocalStrategy implements Strategy {
    login(user: string, password: string): boolean {
        if (!(user && password)) return false;

        // Do something with user and password
        if (user === "admin" && password === "admin") return true;

        return true;
    }
}

// Strategy 2

class FacebookStrategy implements Strategy {
    login(user: string, password: string): boolean {
        if (!(user && password)) return false;
        return true;
    }
}

const auth = new LoginContext(new LocalStrategy());

auth.login("admin", "admin"); // true

auth.setStrategy(new FacebookStrategy());

auth.login("admin", "admin"); // true

