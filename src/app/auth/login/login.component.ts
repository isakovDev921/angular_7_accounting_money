import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/users';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.model';


@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  user: User;
  email: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(text: string, type: string = 'danger', ) {
    this.message = new Message(type, text);

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
  
        if (user) {
          if (user.password === formData.password) {
            console.log("Вход");
          } else {
           this.showMessage('Пароль не верный');
          }
        } else {
          this.showMessage('Такого пользователя не существует!'); 
        }

      
      // var test = data[0].email;          
      //  console.log('component ' + test );
      });
  }

}
