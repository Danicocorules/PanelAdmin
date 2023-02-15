import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsuarioService } from 'src/app/services/usuario.service';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

    @ViewChild('googleBtn') googleBtn!: ElementRef;

    loginForm: FormGroup = this.fb.group({
        email: [ localStorage.getItem('usuario') || '', [ Validators.required, Validators.email ] ],
        password: ['222222', Validators.required],
        remember: [ false ]
    });

    constructor( private router: Router,
                 private fb: FormBuilder,
                 private usuarioServ: UsuarioService ) { }

    ngAfterViewInit(): void {

        this.googleInit();
    }

    googleInit() {
        google.accounts.id.initialize({
            client_id: "787935281229-3c7sjbga0g3nka5p3e6sig20rj28jom6.apps.googleusercontent.com",
            callback: (response: any) => {
                this.handleCredentialResponse( response )
            }
          });
          google.accounts.id.renderButton(
            this.googleBtn.nativeElement,
            { theme: "outline", size: "large" }  // customization attributes
          );
    }

    handleCredentialResponse (response: any): void {
        console.log("Encoded JWT ID JAH token: " + response.credential);
        this.usuarioServ.loginGoogle(response.credential)
            .subscribe( resp => {
                // console.log({ login: resp });
                this.router.navigateByUrl('/');

            } )
    }

    login() {

        // Validar formulario
        this.usuarioServ.loginUser( this.loginForm.value )
            .subscribe( resp => {
                if ( this.loginForm.value.remember ) {
                    localStorage.setItem('usuario', this.loginForm.value.email);
                } else {
                    localStorage.removeItem('usuario');
                }

                this.router.navigateByUrl('/');

            }, err => { Swal.fire({
                title: 'Error!',
                text: err.error.msg,
                icon: 'error',
                confirmButtonText: 'Aceptar'})
            });
    }
}

