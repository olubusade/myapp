import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medications } from '../interfaces/medications';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // It will inject this provider at the root level of the application so it can be accessed anywhere.
})
export class MedicationsService {

  constructor(private http: HttpClient) { }
  //API URL coming from backend
  url:string = "http://localhost:3000/api/all-medications";

  //GET Request to the backend server and return data
  getMedications():Observable<Medications[]>{
   return this.http.get<Medications[]>(this.url)
  }
}
