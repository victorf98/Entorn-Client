import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Aquest objecte es podrà utilitzar a qualsevol lloc gràcies al "root"
@Injectable({
        providedIn: "root"
})

export class userApi {
    //Amb el constructor fem que la classe catFact tingui la propietat HttpClient per fer peticions HTTP
    constructor(private http:HttpClient){}

    create(user: any): Observable<any>{
        const requestOptions = this.createHeader();
        const userJSON = JSON.stringify(user);

        return this.http.post("https://gorest.co.in/public/v2/users", userJSON, requestOptions);
    }

    getUsers():Observable<any>{
        const requestOptions = this.createHeader();
        return this.http.get("https://gorest.co.in/public/v2/users", requestOptions);
    }

    private createHeader(){
        const token: string = "6470ce68e532a37494b757bf58a8b5bb3763f4517b78fdbb4b7db25128612ff7";

        const header = {
            "Access-Control-Allow-Origin":"*",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Headers":"Origin, Content-Type, Accept, Authorization",
            "Authorization": `Bearer ${token}`
        }

        return {headers: new HttpHeaders(header)}
    }

}