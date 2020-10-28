var http = require('http')
var auth = require('basic-auth')
var compare = require('tsscmp')
import { Response } from 'express';
import { debug, log } from 'winston';
import UserFacade from '../facades/user';

// Create server
var authMiddleware = async (req: any, res: Response, next: Function) => {
    var credentials = auth(req)
    debug(credentials);

    try {
        if (credentials || await UserFacade.checkUser(credentials.name, credentials.pass)) {
            const user = await UserFacade.getUser(credentials.name);
            debug(user);
            req.userName = user.userName;
            req.role = user.role;
            return next();
        }
    } catch (error) { }

    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
}

export default authMiddleware;