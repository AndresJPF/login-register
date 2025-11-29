import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Registrar usuario
  register(user: any): Observable<any> {
    const newUser = {
      ...user,
      createdAt: new Date().toISOString()
    };
    return this.http.post(this.apiUrl, newUser);
  }

  // Login de usuario
  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
      map(users => {
        if (users.length === 0) {
          throw new Error('Usuario no encontrado');
        }
        
        const user = users[0];
        if (user.password !== password) {
          throw new Error('Contraseña incorrecta');
        }
        
        return user;
      })
    );
  }

  // Verificar si el email ya existe
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
      map(users => users.length > 0)
    );
  }
}