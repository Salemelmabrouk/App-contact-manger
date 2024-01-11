import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;

  private baseURL = 'http://localhost:8090/api/v1';
 /* private baseURL ='http://localhost:8080';*/

  constructor(private httpClient :HttpClient) { 
  }
    getContactList(): Observable<contact[]> {
      return this.httpClient.get<contact[]>(`${this.baseURL}/contacts`); }

    add(Contact:contact): Observable<contact> {     
      return this.httpClient.post(`${this.baseURL}/create`,Contact);  }

    list(): Observable<contact[]> {     
        return this.httpClient.get<contact[]> (`${this.baseURL}/contacts`)  }

    update(id:number,contact:any): Observable<contact> {     
          return this.httpClient.put<contact>(`${this.baseURL}/update` + '/'+ id,contact);  }

    delete(id:number): Observable<any> {     
      return this.httpClient.delete(`${this.baseURL}/delete`+'/'+ id );  }     

     get(id:number,contact:any): Observable<any> {     
      return this.httpClient.get<contact>(`${this.baseURL}/get`+'/'+ id ,contact);  } 

      

      getPaginatedContacts(page: number, size: number): Observable<contact[]> {
        const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
        return this.httpClient.get<contact[]>(`${this.baseURL}/contacts/paginated`, { params });
      }
    }





