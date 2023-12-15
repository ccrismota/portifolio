import { Component } from '@angular/core';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.sass']
})
export class AppContentComponent {


  nome: string = '';
  showList: boolean = false;
  alterarClasseMenu: string = 'header';
  constructor() { }


  clickMenu() {
    this.showList = !this.showList;
    if (this.showList){
      this.alterarClasseMenu = 'header-with-list'
    }
    else
      this.alterarClasseMenu = 'header'
  }



}
