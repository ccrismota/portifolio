import { Component, Host, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.sass']
})
export class AppContentComponent implements OnInit, OnDestroy {

  showX: boolean = false;
  heightHeader = '100vh';
  topContainerFluid = '167px';
  showBotao: boolean = false;
  menuContato: string = 'none';

  @Output() marginTopBodyNavbar = '165px';

  private observeSubscription: Subscription;

  constructor(
    private service: ServiceService
  ) {
    this.observeSubscription = this.service.observeMenu$.subscribe((os) => { this.menuContato = os; });
    this.observeSubscription = this.service.observeHeight$.subscribe((os) => { this.heightHeader = os; });
  }

  ngOnDestroy(): void {
    this.observeSubscription.unsubscribe();
  }


  @HostListener('window:resize', ['$event'])
  updateSize(event: any) {
    this.showX = !this.showX;
    this.showBotao = !this.showBotao;
    if (window.innerWidth < 768) {
      this.menuContato = 'none';
      this.heightHeader = '362px';
      this.topContainerFluid = '205px';
      if (window.innerWidth < 768 && this.showX === true) {
        this.menuContato = 'block';
      } else {
        this.menuContato = 'none';
        this.heightHeader = '162px';
      }
    } else {
      this.heightHeader = '100vh';
      this.menuContato = 'block';
      this.showX = true;
    } if (this.showX) {
      this.showBotao = true;
      this.topContainerFluid = '405px';
      this.marginTopBodyNavbar = '365px';
    } else {
      this.topContainerFluid = '205px';
      this.marginTopBodyNavbar = '165px';
    }

  }

  ngOnInit(): void {

  }
}
