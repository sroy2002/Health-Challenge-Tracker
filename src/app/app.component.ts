import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InputFieldComponent } from './Components/input-field/input-field.component';
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[NavbarComponent,InputFieldComponent],
  standalone:true
})
export class AppComponent {
  title = 'healthTracker';
}
