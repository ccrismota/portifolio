import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  private observeMenu: BehaviorSubject<any> = new BehaviorSubject<any>('block');
  public observeMenu$ = this.observeMenu.asObservable();
  
  private observeHeight: BehaviorSubject<string> = new BehaviorSubject<string>('100vh');
  public observeHeight$ = this.observeHeight.asObservable();

  constructor() { }
  
  updateObservation(os: string){
    this.observeMenu.next(os);
    this.observeHeight.next(os);
  }
}

