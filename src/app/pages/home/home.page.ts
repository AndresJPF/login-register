import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) {
      this.router.navigate(['/login']);
      return;
    }

    this.user = JSON.parse(userData);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}