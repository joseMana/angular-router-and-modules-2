import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  private count:number = 0;

  constructor() { }

  public logVisitCountOfService(): void {
    console.log("How many times was logger service visited? Count: " + ++this.count);
  }
}
