import {NextFunction, Request, Response, Router} from "express";

class HealthCheck {
    private router: Router

    constructor() {
        this.router = Router();
        this.initRoutes();

    }

    public get $router(): Router {
        return this.router;
    }

    public set $router(value: Router) {
        this.router = value;
    }

    private HealthCheck = (req: Request, res: Response, next: NextFunction) => {
        res.json({code: "0000", status: "success"})
    };

    private initRoutes() {
        this.router.get("/", this.HealthCheck);
    }
}

export const HealthCheckRouter = new HealthCheck().$router;




