import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PasswordGeneratorComponent} from './password-generator/password-generator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PasswordGeneratorComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PassGenerator';
}
