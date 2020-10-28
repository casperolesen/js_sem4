
/*
  See this article for details about custom errors:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
*/
class ApiError2 extends Error {
    constructor(public msg:string,public errorCode:number) {
      super(msg)
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ApiError2)
      }
  
      this.name = 'ApiError2'
      this.errorCode = errorCode || 500;
      //res.status(this.errorCode).send(res.json(this.msg))
      //next()
      
    }
}

export {ApiError2}