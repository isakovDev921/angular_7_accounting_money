import { Component } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  

@Component({
  selector: 'wfm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Indiastate = [  
    "Rajasthan",  
    "UP",  
    "Mp",  
    "Delhi",  
    "Goa",  
    "Gurjat",  
    "Punjab"  
  ];  
  Ausstate = [  
  
    "New South Wales",  
    "Queensland",  
    "South Australia",  
    "Tasmania"  
  ];  
  Slstate = [  
    "Kandy",  
    "Galle",  
    "Kegalle",  
    "Mannar"  
  ];  
}




