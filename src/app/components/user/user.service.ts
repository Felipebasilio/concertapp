import { User } from './user.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3001/users"
  
  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }


  readById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro! Voce iniciou o backend?", true);
    return EMPTY
  }
  
}
