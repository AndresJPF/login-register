import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true
})
export class LoginPage {

  email: string = '';
  password: string = '';

  apiUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async onLogin() {
    if (!this.email || !this.password) {
      this.showToast('Please fill all fields');
      return;
    }

    this.http.get<any[]>(`${this.apiUrl}?email=${this.email}`).subscribe(users => {
      if (users.length === 0) {
        this.showToast('Email not found');
        return;
      }

      const user = users[0];

      if (user.password !== this.password) {
        this.showToast('Incorrect password');
        return;
      }

      this.showToast('Login successful!');
      this.router.navigate(['/home']);
    });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1800,
      position: 'bottom'
    });
    toast.present();
  }
}
