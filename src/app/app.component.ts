import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Intern} from './Intern';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
title = 'first angular app';
name: string;
age: number;
data: any;
error:any;
  arr: Intern [] = [{
    name: 'BHawna', age : 23 },
    { name: 'Nitin', age : 24
  }];
  constructor(private service: AppService, private router: Router) {
    }
    getDataFromService() {
    this.service.getData().subscribe((data: any) =>
    {// document.write(JSON.stringify(data));
      this.data = data;
      this.router.navigate(['home/login']);
    //console.log(data);
    }, err => console.error(this.error = err));
  }
/*
    goTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {
    alert('hey');
  }
  ngAfterViewInit() {
    alert('yeah..you just go to hell');
  }
  changeTitle() {
    this.title = 'go to hel';
    }
    showName($event: string) {
    alert($event);

    }
*/



}


