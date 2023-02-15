import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor( private usuarioServ: UsuarioService,
                 private router: Router ) {}

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

        this.usuarioServ.renewToken();
            // .subscribe( resp => { console.log('la resp del serv es:', resp); } );

        console.log('pasó por el can activate del guard');

        return this.usuarioServ.renewToken()
            .pipe(
                tap( isAuth => {
                    if ( !isAuth ) {
                        this.router.navigateByUrl('/login');
                    }
                })
            );
    }

}
