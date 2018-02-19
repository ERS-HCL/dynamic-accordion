# Dynamic Accordion using Angular and Bootstrap 

Dynamic-Accordion component can create dynamic accordion using json data given by the user.
We can use the accordion component this is a re-usable component.

## Output Format

 <p align='center'><img src="https://github.com/KNVSAIRAM/dynamic-accordion/blob/master/Images/output1.jpg"></p>
 
 To preview demo of dynamic accorion project, [Click here](https://stackblitz.com/edit/json-to-accordion-angular?embed=1&file=src/app/app.component.html&hideNavigation=1&view=preview)
 
 
## Getting Started
Download the Dynamic accordion folder and install the required packages and run the application. 

### Installing
    - npm install

### Run server
    - ng serve

## Adding accordion list component in your project
Download the accordion.component and use it in your project.

####  Use this below syntax to send data to accordion component

    <app-accordian [jsonData]='jsonData'></app-accordian>
### AccordionInfo Interface
 jsonData is the input of type AccordionInfo
 ```
  AccordionInfo {
      heading:string;
      data:string;
      status:boolean;
 }
```

#### Interface Description

   - **heading** gives the accordion name,
   - **data** gives the information about heading,
   - **status** while opening the html page whether it is opening state or closing state by declaring true or false.
    
#### Json location 

    Json data can take from either external link(assets) then use http request to get Json data or directly
    use json format into component.ts by creating json format variable file  

## How it works
  
    User will pass the data in property binding format i.e like above mentioned tag
    then Json data object will hold this information and gives to **input decorator**
### @Input Decorator

    @Input('jsonData') jsonData;


In accordion we use *NgFor loop to iterate the json Data inside the for loop and then it checks the condition 
whether is it open or close based on the status using *ngIf.


  
