import { DataService } from './data.service';
import { UserComponent } from './components/user/user.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass']

})
export class AppComponent implements OnInit {

  isLogged: boolean;
  showlogin: boolean = true;

  loaded = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentIsLogged.subscribe(Logged => {
      // this.isLogged = true;
      this.isLogged = Logged; //MUDAR AQUI PARA AUTH
      this.showlogin = !Logged;
      })

      setInterval(() => {
        this.loaded = true;
      }, 1000);
  }
  

  

}

