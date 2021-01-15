import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLogged = new BehaviorSubject<boolean>(false);
  currentIsLogged = this.isLogged.asObservable();

  constructor() { }

  changeIsLogged(isLogged: boolean) {
    this.isLogged.next(isLogged)
  }
}
