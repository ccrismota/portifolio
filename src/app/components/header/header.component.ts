import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

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


  ngOnInit(): void {
  }

}
