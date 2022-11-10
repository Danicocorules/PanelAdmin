import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs/dist/types/internal/Subscription';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{

    actualPage!: string;
    public getNameSubs!: Subscription;

    constructor( private router: Router ) {

        this.getNameSubs = this.getName()
                                    .subscribe( ( (data:string) => {
                                        this.actualPage = data;
                                        document.title = data;
                                    } ) );
    }

    ngOnDestroy(): void {
        this.getNameSubs.unsubscribe();
        console.log('object');
    }

    getName() {
        return  this.router.events
            .pipe(
                filter( (event:any) => event instanceof ActivationEnd ),
                filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
                map( (event:any) => event.snapshot.data.titulo )
            )
    }

}
