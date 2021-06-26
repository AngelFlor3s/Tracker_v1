import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularchallenge';
  array = [ "Working out", "biking", "swimming", "Gaming"];
  name: string = "Angel Flores";
  birthday: string = "4/3/2005";
  age: number = 16;
  height: string = "5'8";
  movie = "";
}
