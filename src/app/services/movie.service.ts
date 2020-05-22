import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'c1f43a22'; 

  constructor(private http:HttpClient) { }
 searchData(title: string,type: string ){
  return this.http.get(`${this.url}?s=${title}&type=${type}&apikey=${this.apiKey}`).pipe
  (map(results => results['Search']));
}

getDetails(id) {
  return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
}


}
