import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InputFieldComponent } from './Components/input-field/input-field.component';
import { UsersService } from './Components/users.service';
import { ShowUsersComponentComponent } from "./Components/show-users-component/show-users-component.component";
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, InputFieldComponent, ShowUsersComponentComponent],
  standalone:true
})
export class AppComponent implements OnInit {
  title = 'healthTracker';
  users:any[]= [];
  constructor(private usersService: UsersService){}
  ngOnInit() {
    this.usersService.users$.subscribe(users=>{
      this.users = users;
    });
  }

  addNewUser(userData: { newUser:any; totalWorkoutMinutes: number }){
    this.usersService.addUser(userData.newUser);
  }
}
