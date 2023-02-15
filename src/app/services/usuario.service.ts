import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { RegisterForm } from './../interfaces/register-form.interface';
import { LoginForm } from './../interfaces/login-form.interface';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

declare const google: any;

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

    constructor( private http: HttpClient ) { }

    createUser( formData: RegisterForm ) {
        return this.http.post( `${base_url}/usuarios`, formData )
            .pipe(
                tap( (resp: any) => {
                    localStorage.setItem('token', resp.token);
                })
            );
    }

    loginUser( formData: LoginForm) {
        return this.http.post( `${base_url}/login`, formData )
            .pipe(
                tap( (resp: any) => {
                    localStorage.setItem('token', resp.token);
                })
            );
    }

    renewToken(): Observable<boolean> {
        const token = localStorage.getItem('token') || '';

        return this.http.get( `${base_url}/login/renew`, {
            headers:
                { 'x-token' : token }
        }).pipe(
            tap( (resp: any) => {
                localStorage.setItem('token', resp.token );
            }),
            map( resp => true),
            catchError( err => of(false ))
        )
    }

    loginGoogle( token: string ) {
        return this.http.post( `${base_url}/login/google`, { token } )
            .pipe(
                tap( (resp: any) => {
                    localStorage.setItem('token', resp.token);
                })
            )
    }

    logout() {
        localStorage.removeItem('token');

        google.accounts.id.revoke( 'correo', () => {

        } )
    }
}
