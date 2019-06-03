import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  constructor(private userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {


    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, this.forBiddenEmails.bind(this)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value; //создаем 3 перемнные и получаем данные из формы
    const user = new User(email, password, name);

    this.userService.createNewUser(user)
      .subscribe((user: User) => {
        this._router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      })
  }

  forBiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({ forbiddenEmail: true });
          } else {
            resolve(null);
          }
        })
    })
  }

}
