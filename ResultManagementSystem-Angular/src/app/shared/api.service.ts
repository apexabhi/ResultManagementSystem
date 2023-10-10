//Service for handling crud operations
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  //to add records of students
  postRecords(data: any) {
    return this._http.post<any>("http://localhost:3000/records", data)
      .pipe(map((res, any) => {
        return res;
      }))
  }

  //to fetch records of students
  getRecords() {
    return this._http.get<any>("http://localhost:3000/records")
      .pipe(map((res, any) => {
        return res;
      }))
  }

  //to delete records of student
  deleteRecord(id: any) {
    return this._http.delete<any>("http://localhost:3000/records/" + id)
      .pipe(map((res, any) => {
        return res;
      }))
  }

  //to update records of student
  updateRecord(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/records/" + id, data)
      .pipe(map((res, any) => {
        return res;
      }))
  }

  //to get teacher login details
  getCredentials() {
    return this._http.get<any>("http://localhost:3000/teachersignup")
      .pipe(map((res, any) => {
        return res;
      }))
  }

  //to store teacher credentials
  postCredentials(data: any) {
    return this._http.post<any>("http://localhost:3000/teachersignup", data)
      .pipe(map((res, any) => {
        return res;
      }))
  }
}
