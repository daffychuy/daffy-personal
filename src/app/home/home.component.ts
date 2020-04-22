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
  data: any
  constructor(
    private route: ActivatedRoute,
    private hs: HomeService
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.data.data;

  }

}
