import Swal from 'sweetalert2'

import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    formSubmited = false;

    public registerForm = this.fb.group({
        nombre: [ 'Dani', [Validators.required, Validators.minLength(3)] ],
        email: [ 'test@test.com', [Validators.required, Validators.email] ],
        password: [ '111', [Validators.required, Validators.minLength(1)] ],
        passwordConfirm: [ '111', [Validators.required, Validators.minLength(1)] ],
        terms: [ true, [Validators.required] ]
    }, {
        validators: this.ecqualPass('password', 'passwordConfirm')
    });

    constructor( private fb: FormBuilder,
                 private usuarioServ: UsuarioService,
                 private router: Router ) { }

    crearUsuario() {

        this.formSubmited = true;

        if ( this.registerForm.invalid ) {
            return;
        }

        // Realizar la creación de usuario
        this.usuarioServ.createUser( this.registerForm.value )
            .subscribe(
                resp => {
                    this.router.navigateByUrl('/');
                },
                err => { Swal.fire({
                    title: 'Error!',
                    text: err.error.msg,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                  }) }
                );
    }

    validarCampo( campo: string ): boolean {
        if ( this.registerForm.get(campo)?.invalid
            && this.registerForm.get(campo)?.touched ) {
            return true;
        } else {
            return false;
        }
    }

    acceptTerms() {
        return !this.registerForm.controls['terms'].value && this.formSubmited;
    }

    passwordInvalids() {

        const pass1 = this.registerForm.controls['password'].value;
        const pass2 = this.registerForm.controls['passwordConfirm'].value;

        if ( pass1 === pass2 ) {
            return false;
        } else {
            return true;
        }
    }

    ecqualPass( pass1: string, pass2: string ) {

        return ( FormGroup: FormGroup ) => {

            const p1Control = FormGroup.get(pass1);
            const p2Control = FormGroup.get(pass2);

            if ( p1Control?.value === p2Control?.value ) {
                p2Control?.setErrors(null);
            } else {
                p2Control?.setErrors({noEsIgual: true })
            }
        }
    }
}
