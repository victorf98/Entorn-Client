import { Component, OnInit } from '@angular/core';
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
    this.httpClient.create(this.user).subscribe( () => {
      console.log(this.user);
      this.getAllUsers();
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
