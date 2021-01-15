import { Shelter } from './shelter.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  baseUrl = "http://localhost:3001/shelter"

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

  create(shelter: Shelter): Observable<Shelter> {
    return this.http.post<Shelter>(this.baseUrl, shelter).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  
  read(): Observable<Shelter[]> {
    return this.http.get<Shelter[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  readById(id: string): Observable<Shelter> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Shelter>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  update(shelter: Shelter): Observable<Shelter> {
    const url = `${this.baseUrl}/${shelter.id}`
    return this.http.put<Shelter>(url, shelter).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  delete(id: number): Observable<Shelter> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Shelter>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro! Voce iniciou o backend?", true);
    return EMPTY
  }
  
}
