import { Component, OnInit } from '@angular/core';
import {DataService} from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students:any = [];
  weather:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.GetStudentData().subscribe( 
      (data)=>{
        this.students = data.students;
        console.log(this.students);
      }
    );

    this.dataService.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        console.log(this.weather);
      }
    );
  }

}
