import { HomeService } from './../core/services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { home } from '../core/services/home.interface'
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private hs: HomeService
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.data.data;
    for (let i = 0; i < this.data.experiences.length; i++) {
      let date = new Date(this.data.experiences[i].start_date);
      let new_date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
      this.data.experiences[i].start_date = new_date;
      date = new Date(this.data.experiences[i].end_date);
      new_date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
      this.data.experiences[i].end_date = new_date;
    }
  }

}
