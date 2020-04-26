import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { HomeService } from '../core/services/home.service';
import { home } from '../core/services/home.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve <Observable<any>>{

  constructor(private hs: HomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.hs.getAll();
  }
}