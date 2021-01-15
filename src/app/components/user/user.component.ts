import { DataService } from './../../data.service';
import { User } from './user.model';
import { UserService } from './user.service';
import { isError } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  user: User = {
    login: '',
    password: ''
  };

  isLogged: boolean = false;

  constructor(private router: Router,
    private userService: UserService,
    private http: HttpClient,
    private data: DataService) { }

  ngOnInit(): void {
    this.data.currentIsLogged.subscribe(Logged => this.isLogged = Logged)
  }

  loginProcess():void {
    if ((this.user.login == "concert") && (this.user.password == "prova")){
      this.data.changeIsLogged(true);
      console.log(this.data.currentIsLogged);
      this.user.login = 'concert';
      this.user.password = 'prova';
    }
  }
}
