import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

onact(){
  console.log('reg')
  this.router.navigate(['../register'])
}
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
