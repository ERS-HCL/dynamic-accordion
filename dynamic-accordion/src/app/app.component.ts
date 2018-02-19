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
  jsonData:AccordionInfo[]=
  [{
    "heading": "content1",
    "data": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perferendis amet corrupti. Neque sit ipsum earum, quidem laborum repellat aliquam.",
    "status": true
  },
  {
    "heading": "content2",
    "data": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perferendis amet corrupti. Neque sit ipsum earum, quidem laborum repellat aliquam.",
    "status": false
  },
  {
    "heading": "content3",
    "data": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perferendis amet corrupti. Neque sit ipsum earum, quidem laborum repellat aliquam.",
    "status": false
  },
  {
    "heading": "content4",
    "data": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perferendis amet corrupti. Neque sit ipsum earum, quidem laborum repellat aliquam.",
    "status": false
  },
  {
    "heading": "content5",
    "data": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perferendis amet corrupti. Neque sit ipsum earum, quidem laborum repellat aliquam.",
    "status": false
  }];
;
}
