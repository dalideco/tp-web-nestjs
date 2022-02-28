import { Injectable, NestMiddleware } from '@nestjs/common';
import fs from 'fs'

@Injectable()
export class ValidationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('im in middleware')
    const date = new Date() ;
    const data = `${date.toISOString()}:${JSON.stringify(req)}`
    const path="./logs/logs.txt"
    if (fs.existsSync(path)){
      fs.appendFileSync(path, data);
    }else{
      fs.writeFileSync(path, data)
    }
    next();
  }
}
