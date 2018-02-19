import { Component, Input } from '@angular/core';
import {AccordionInfo} from "../accordion-info";

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  @Input('jsonData') jsonData:AccordionInfo;
  constructor(){}
  title="Json data to Accordion using Bootstrap"
}
