import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor( private usuarioServ: UsuarioService,
               private router: Router ) { }

  logout() {
      this.usuarioServ.logout();
      this.router.navigateByUrl('/login');
  }

}
