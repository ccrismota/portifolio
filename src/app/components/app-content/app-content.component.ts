import { Component, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.sass']
})
export class AppContentComponent implements OnInit {

  showX: boolean = false;
  alturaHeader = '162px';
  topContainerFluid = '167px';
  showBotao: boolean = false;

  @Output() marginTopBodyNavbar = '165px';
  
  constructor() { }
  
  exibirMenu() {
    this.showX = !this.showX;
    this.showBotao = !this.showBotao;
    if (this.showX) {
      this.showBotao = true;
      this.alturaHeader = '362px';
      this.topContainerFluid = '405px';
      this.marginTopBodyNavbar = '365px';
    } else {
      this.alturaHeader = '162px';
      this.topContainerFluid = '205px';
      this.marginTopBodyNavbar= '165px';
    }
  }

 
  ngOnInit(): void {
    if(window.innerWidth < 768) {
      this.alturaHeader = '162px';
    } else {
      this.alturaHeader = '100vh';
      this.showX = true;
    }
  }
}
