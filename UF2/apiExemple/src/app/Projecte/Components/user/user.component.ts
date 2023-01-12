import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../../Model/Entitats/user';
import { userApi } from '../../Serveis/Api/userApi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: Array<{ id: number, name: string, email: string, gender: string, status: string }>
  user!: User;

  constructor(private httpClient: userApi) {
    this.user = new User();
    this.getAllUsers();
  }

  guardar(){
    /*const apiCall = this.httpClient.create(this.user);
    apiCall.subscribe();
    apiCall.subscribe();*/

    this.httpClient.create(this.user).
    pipe(catchError((err: any) => {
      console.log(err.error);
      return throwError(() => new Error("Error en crear l'usuari"))
    }))
    .subscribe( {
      next: (res) => {},
      error: (err:any) => {console.log(err.message)},
      complete: () => {this.getAllUsers()}
    })
  }

  getAllUsers() {
    this.httpClient.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit(): void {
  }

}
