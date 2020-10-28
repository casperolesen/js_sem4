import { Request, Response, NextFunction } from "express";

const simpleLogger = (req:Request, res:Response, next:NextFunction) => {
    const time = Date.now();
    const method = req.method;
    const url = req.originalUrl;
    console.log("LOGGER:", {"time": time, "method": method, "url": url});
    next();
}

export { simpleLogger }