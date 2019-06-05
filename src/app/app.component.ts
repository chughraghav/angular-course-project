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
  selectedCity: string;

  constructor(private httpService: HttpService){

    httpService.getCitiesList().subscribe((value) => {
      this.cityList = value['cities'];
    }, (err) => {
      console.log(err);
    });
  }
}
