import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  @Input('jsonData') jsonData;
  constructor(){}
  title="Json data to Accordion using Bootstrap"
}
