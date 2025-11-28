import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true
})
export class RegisterPage {

  name = '';
  email = '';
  password = '';
  message = '';
 
  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      this.message = "All fields are required";
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(newUser).subscribe(() => {
      this.message = "User created successfully!";
      
      // Guardar en localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      // Ir al login
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    });
  }

}
