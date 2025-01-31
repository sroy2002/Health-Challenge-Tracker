import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSource = new BehaviorSubject<any[]>([
    { username: 'John Doe', workoutType: ['Cycling'], workoutMinutes: [30] },
    { username: 'Jane Smith', workoutType: ['Running'], workoutMinutes: [45] },
    { username: 'Alice Brown', workoutType: ['Yoga'], workoutMinutes: [60] }
  ]);

  users$ = this.usersSource.asObservable();

  // Method to add a new user
  addUser(user: any) {
    const currentUsers = this.usersSource.value;
    this.usersSource.next([...currentUsers, user]);
  }
}
