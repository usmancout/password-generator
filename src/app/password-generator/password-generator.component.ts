import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  charLength: number = 8;
  generatedPassword: string = '';
  message: string = '';

  generatePassword(): void {
    if (this.charLength < 0) {
      this.message='Enter valid number please'
    }
    else if (this.charLength >0 && this.charLength <= 4) {
      this.message='Pass must be at least 4 characters'
    }
    else if (this.charLength >20) {
      this.message="Pass can't be more than 20 characters"
    }
    else{
      this.message="";
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
      let password = '';
      for (let i = 0; i < this.charLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      this.generatedPassword = password;

    }

  }

  copyPassword(): void {
    if (this.generatedPassword) {
      navigator.clipboard.writeText(this.generatedPassword).then(() => {
        alert('Password copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy password.');
      });
    } else {
      alert('No password to copy. Generate one first!');
    }
  }
}
