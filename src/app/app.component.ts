import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SessionService } from './service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'management-system';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.bindRouterChange();

  }

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;


  bindRouterChange() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => { if (!sessionStorage.getItem('user')) { this.router.navigateByUrl('/login') } });
  }
}
