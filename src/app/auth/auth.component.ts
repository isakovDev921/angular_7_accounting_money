import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'wfm-login',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor(private router: Router) {

    }
    ngOnInit() {
       this.router.navigate(['/login']);
    }
}