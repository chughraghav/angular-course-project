import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aboutLogin: string;
  signIn: FormGroup;
  invalid: boolean;
  constructor(private http: HttpService, private router: Router) {

    this.aboutLogin = `MovieTicketBooking is an online application where you can book tickets for your favorite movie.
                        Please login to the application to grab your movie tickets`;
  }

  ngOnInit() {
    this.signIn = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  validate() {
    if(this.signIn.get('username').valid && this.signIn.get('password').valid) {
      this.http.getUsers().subscribe((list) => {
        const users = list;
        let userFound = false;
        for (const user in users) {
          if (users[user].username === this.signIn.get('username').value.toLowerCase() &&
          users[user].password === this.signIn.get('password').value.toLowerCase()) {
            userFound = true;
            this.router.navigate(['moviesList']);
          }
        }
        if(userFound === false) {
          this.invalid = true;
        }
      }, (err) => {
        console.log(err);
      });
    }
  }

}
