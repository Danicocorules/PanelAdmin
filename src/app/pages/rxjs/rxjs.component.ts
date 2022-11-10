import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {



  intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.retornInterval()
      .subscribe(
        (val: number) => console.log(val)
      )

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe() ;
  }

  retornInterval(): Observable<number> {

    const intervalo$ = interval(500)
                          .pipe(
                            //take(10),
                            map( (val: number) => {
                              return val + 1;
                            }),
                            filter( (val: number) => val % 2 === 0 )

                          );




    return intervalo$;

  }

  returnObs() {
    let i = 0;

    const obs = new Observable<number>( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if ( i === 4 ) {
          clearInterval( intervalo )
          observer.complete();
        }

      }, 1000 )
    });

    return obs;


  }



}
















// let i = -1;

//     const obs = new Observable<number>( (observer:any) => {

//       const int = setInterval( () => {

//         i++;
//         observer.next(i);

//         if( i === 4 ) {
//           clearInterval( int );
//           observer.complete();
//         }


//       }, 1000)

//     })

//     obs.subscribe(
//       valor  => console.log('Subs: ', valor),
//       err  => console.log(err),
//       () => console.log('OBS FINIQUITADO')
//     );
