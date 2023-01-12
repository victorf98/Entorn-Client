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
  user: User = new User();

  constructor(private httpClient: userApi) {
    /*const user = {
      name: "Usernou",
      gender: "Female",
      email: "email12345@local",
      status: "active"
    }*/

    this.httpClient.create(this.user).subscribe(data => {
      this.getAllUsers();
    })
    this.getAllUsers();
  }

  getAllUsers() {
    this.httpClient.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit(): void {
  }

}
