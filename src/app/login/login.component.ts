import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aboutLogin: string;
  constructor() {
    this.aboutLogin = `MovieTicketBooking is an online application where you can book tickets for your favorite movie.
                        Please login to the application to grab your movie tickets`;
  }

  ngOnInit() {
  }

}
