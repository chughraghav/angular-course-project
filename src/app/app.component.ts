import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieTicketBooking';
  navHeading = 'Movie Ticket Booking';
  cityList: Array<string>;
  location: string;

  constructor(private httpService: HttpService){

    this.location = 'Select location';

    httpService.getCitiesList().subscribe((value) => {
      this.cityList = JSON.parse(JSON.stringify(value)).cities;
    }, (err) => {
      console.log(err);
    });
  }

  selectCity(city: string) {
    this.location = city;
  }
}
