import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  user: any = null;

  constructor(private router: Router) {}

  ionViewWillEnter() {
    const data = localStorage.getItem('user');
    if (!data) {
      this.router.navigate(['/login']); // si no hay sesión, redirigir
      return;
    }

    this.user = JSON.parse(data);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
