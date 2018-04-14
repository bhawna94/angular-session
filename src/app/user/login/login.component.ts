
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from './login';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name = 'Bhawna';
  @Input() firstname: string;
  @Output() submitname = new EventEmitter()
  user: Login = new Login(' ', '');
  constructor(private route: ActivatedRoute) {  }
  ngOnInit(){
   console.log(this.route.snapshot.params['id']);
}
  submituser() {
    console.log(this.user);
  }
  submitForm() {
    this.submitname.emit(this.firstname);
  }
}
