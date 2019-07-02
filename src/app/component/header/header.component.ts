import { Component, OnInit } from '@angular/core';
import { StaticVar } from '../../common/static-var';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = this.staticVar.TITLE;

  constructor(private staticVar: StaticVar, private router: Router) { }

  ngOnInit() {
  }

  exit(): void {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
