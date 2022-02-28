import { Injectable, NestMiddleware } from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class ValidationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('im in middleware')
    const date = new Date() ;
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const data = `------------------
       date: ${date.toISOString()}
       url: ${fullUrl}
       method: ${req.method}
       body: ${JSON.stringify(req.body)}
       user ip : ${req.ip}
      `
    console.log(path.resolve(__dirname,"./logs/logs.txt"))
    const myPath=path.resolve(__dirname,"./logs.txt")
    
    if (fs.existsSync(myPath)){
      fs.appendFileSync(myPath, data);
    }else{
      fs.writeFileSync(myPath, data)
    }
    next();
  }
}
