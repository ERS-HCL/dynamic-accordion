import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AccordionInfo} from "./accordion-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Json Data';
  jsonData:AccordionInfo[];
  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('../assets/Accordion.json').map((res) => <AccordionInfo[]>res.json()).subscribe((data) => this.Display(data));
  }
  Display(data:AccordionInfo[]) {
    this.jsonData = data;
  }
}
