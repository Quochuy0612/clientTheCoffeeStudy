import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class CategoryService {
    constructor(private http: HttpClient) { }
    getCategory() {
        let options = {
            headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
        }
        return this.http.get("http://localhost:3000/formCoffee_pros", options );
    }
}