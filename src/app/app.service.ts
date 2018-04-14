import {Injectable} from '@angular/core';
import {Intern} from './Intern';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AppService {
  interns: Intern[] = [new Intern('name', 11), new Intern('Bhawna', 23)];

  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get('https://reqres.in/api/users/10');
    // return Observable.of(this.interns);
  //  return this.http.get('https://reqres.in/api/users/10').pipe(catchError(err => this.handlError(err)));
  }

/*private handlError(err: HttpErrorResponse): Observable<any> {
    if(err.error instanceof ErrorEvent ) {
      console.error(err.error.message);
    }
    else{
      console.error()
    }
}*/
}
