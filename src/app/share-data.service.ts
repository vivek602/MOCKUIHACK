import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShareDataService {

  constructor() { }

  private messageSource = new BehaviorSubject({});
  private sendIndex = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();
  currentIndex = this.messageSource.asObservable();



  changeMessage(message: string,index:number) {
    this.messageSource.next(message)
    this.sendIndex.next({"index":index});

  }

}
