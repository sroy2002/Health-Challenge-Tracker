import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  imports: [FormsModule],
})
export class InputFieldComponent {
  username: string = '';
  workoutType: string = '';
  workoutMinutes: string = '';

  @Output() newUserData = new EventEmitter<any>();

  onSubmit(){
    if(this.username && this.workoutType && this.workoutMinutes){
      const workoutTypesArray = this.workoutType.split(',').map(type => type.trim());
      const workoutMinutesArray = this.workoutMinutes.split(',').map(min => parseInt(min.trim(), 10)); // Convert to numbers
      const totalWorkoutMinutes = workoutMinutesArray.reduce((acc, curr) => acc + curr, 0); // Calculate total
      const newUser = {
        username: this.username,
        workoutType: workoutTypesArray, 
        workoutMinutes: workoutMinutesArray
      };
      this.newUserData.emit({newUser, totalWorkoutMinutes});
      this.username = '';
      this.workoutType='';
      this.workoutMinutes='';
    }
  }

}
