import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,  
  imports: [CommonModule, FormsModule, IonicModule]  
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async register() {
    if (!this.name || !this.email || !this.password) {
      this.showToast('Todos los campos son requeridos');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden');
      return;
    }

    if (this.password.length < 6) {
      this.showToast('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      // Verificar si el email ya existe
      const emailExists = await this.authService.checkEmailExists(this.email).toPromise();
      if (emailExists) {
        this.showToast('El email ya está registrado');
        return;
      }

      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      const response = await this.authService.register(newUser).toPromise();
      
      this.showToast('¡Usuario creado exitosamente!');
      
      // Ir al login después de 1 segundo
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    } catch (error) {
      this.showToast('Error al crear el usuario');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}