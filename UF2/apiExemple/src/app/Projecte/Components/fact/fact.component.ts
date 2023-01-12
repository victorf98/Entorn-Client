import { Component, OnInit } from '@angular/core';
import { catFact } from '../../Serveis/Api/catFactApi';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  fact!: string;
  factNth!: Array<{fact:string, length: number}>
  allFact!: Array<{fact:string, length: number}>

  constructor(private httpClient: catFact) {
    console.log("Inici"); 
    this.httpClient.getFact().subscribe(
      response => {
        console.log("Dins subscribe");
        console.log(response)
        this.fact = response.fact;
      });

    this.httpClient.getNthFacts(3).subscribe(
      response => {
        console.log("Dins subscribe");
        console.log(response)
        this.factNth = response.data;
      });
    
    this.httpClient.getAllFacts().subscribe(
      response => {
        console.log("Dins subscribe");
        console.log(response)
        this.allFact = response.data;
      });

    console.log("final")
  }

  ngOnInit(): void {
  }

}
