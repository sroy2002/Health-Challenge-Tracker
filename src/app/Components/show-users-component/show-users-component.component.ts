import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-users-component',
  imports: [CommonModule],
  templateUrl: './show-users-component.component.html',
  styleUrl: './show-users-component.component.css'
})
export class ShowUsersComponentComponent implements OnInit{
    @Input() users: any[]=[]; //input user array from the parent
    ngOnInit(): void {}
    
    getUserData(){
      return this.users.map(user => ({
        username:user.username,
        workoutType:user.workoutType.join(','),
        numberOfWorkouts:user.workoutType.length,
        totalWorkoutMinutes:user.workoutMinutes.reduce((acc:number, curr:number) => acc + curr, 0)
      }));
    }
}

// if(this.users.length === 0){
//   this.users = [
//     {username: 'John Doe', workoutType: 'Cycling', workoutMinutes: 30},
//     {username: 'John Doe', workoutType: 'Cycling', workoutMinutes: 30},
//     {username: 'John Doe', workoutType: 'Cycling', workoutMinutes: 30}
//   ];
// }