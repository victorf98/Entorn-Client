import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Aquest objecte es podrà utilitzar a qualsevol lloc gràcies al "root"
@Injectable({
        providedIn: "root"
})

export class catFact {
    //Amb el constructor fem que la classe catFact tingui la propietat HttpClient per fer peticions HTTP
    constructor(private http:HttpClient){}

    getFact():Observable<any>{
        return this.http.get("https://catfact.ninja/fact");
    }

    getAllFacts(): Observable<any>{
        return this.http.get("https://catfact.ninja/facts");
    }
    
    getNthFacts(total: number): Observable<any>{
        return this.http.get("https://catfact.ninja/facts?limit=" + total);
    }
}