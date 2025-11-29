import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,  
  imports: [CommonModule, FormsModule, IonicModule]  
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async onLogin() {
    if (!this.email || !this.password) {
      this.showToast('Por favor, completa todos los campos');
      return;
    }

    try {
      const user = await this.authService.login(this.email, this.password).toPromise();
      
      // Guardar usuario en localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      this.showToast('¡Inicio de sesión exitoso!');
      this.router.navigate(['/home']);
    } catch (error: any) {
      this.showToast(error.message || 'Error en el inicio de sesión');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
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