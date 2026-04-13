import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Construye la URL de auth dinámicamente según el entorno
  url = environment.apiUrl.replace('productos/', 'auth/');

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string):Observable<any> {
    return this.http.post(this.url + 'login', { username, password }).pipe(
      tap((res: any) => {
        if(res && res.token) {
          localStorage.setItem('auth_token', res.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
