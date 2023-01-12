import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  mobils = [
    {codi: "101", nom: "Google Pixel 7", quantitat: 0, preu: 649},
    {codi: "102", nom: "Google Pixel 7 Pro", quantitat: 0, preu: 899},
    {codi: "201", nom: "Samsung Galaxy S22", quantitat: 0, preu: 859},
    {codi: "203", nom: "Samsung Galaxy S22 Ultra", quantitat: 0, preu: 1259},
    {codi: "301", nom: "iPhone 14", quantitat: 0, preu: 1009},
    {codi: "302", nom: "iPhone 14 Pro", quantitat: 0, preu: 1319},
    {codi: "401", nom: "Xiaomi 12", quantitat: 0, preu: 799},
    {codi: "402", nom: "Xiaomi 12 Pro", quantitat: 0, preu: 1099},
    {codi: "501", nom: "Oneplus 10", quantitat: 0, preu: 909},
    {codi: "601", nom: "Nothing Phone 1", quantitat: 0, preu: 469}
  ]

  getArticles(){
    return this.mobils;
  }

  @Output() nameEvent = new EventEmitter;

  ngOnInit(): void {
  }

}
