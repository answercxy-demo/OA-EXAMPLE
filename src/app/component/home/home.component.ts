import { Component, TemplateRef, ViewChild } from '@angular/core';
import { StaticVar } from '../../common/static-var';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private staticVar: StaticVar) { };
  index1 = 1;
  index2 = 2;
  title: String = this.staticVar.TITLE;
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
