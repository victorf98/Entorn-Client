import { Component } from '@angular/core';
import { Hero } from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes:Hero[] = [
    {id: 1, name: "Spiderman"},
    {id: 2, name: "Iron Man"},
    {id: 3, name: "Thor"},
    {id: 4, name: "Hulk"},
    {id: 5, name: "Pau"},
    {id: 6, name: "Doctor Strange"}
  ];

  getTitle():string{
    return "marvel";
  };

  selectedHero?: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  eventDisparat(event: string){
    console.log(event);
  }
}
