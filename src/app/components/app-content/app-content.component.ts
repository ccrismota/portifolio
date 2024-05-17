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
  heightHeader: string = '100vh';
  topContainerFluid: string = '167px';
  showBotao: boolean = false;
  menuContato: string = 'none';

  @Output() marginTopBodyNavbar = '165px';

  private observeMenuSubscription: Subscription;
  private observeHeightSubscription: Subscription;
  constructor(
    private service: ServiceService
  ) {
    this.observeMenuSubscription = this.service.observeMenu$.subscribe((os) => { this.menuContato = os; });
    this.observeHeightSubscription = this.service.observeHeight$.subscribe((os) => { this.heightHeader = os; });
  }

  ngOnDestroy(): void {
    this.observeMenuSubscription.unsubscribe();
    this.observeHeightSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  updateSize(event: any): void {
    this.toggleShowX();
    this.updateLayout();
  }

  private toggleShowX(): void {
    this.showX = !this.showX;
    this.showBotao = !this.showBotao;
  }

  private updateLayout(): void {
    if (window.innerWidth < 768) {
      this.updateMobileLayout();
    } else {
      this.updateDesktopLayout();
    }
  }

  private updateMobileLayout(): void {
    this.menuContato = 'none';
    this.heightHeader = '362px';
    this.topContainerFluid = '205px';
    if (this.showX) {
      this.menuContato = 'block';
      this.topContainerFluid = '405px';
      this.marginTopBodyNavbar = '365px';
    } else {
      this.menuContato = 'none';
      this.heightHeader = '162px';
      this.marginTopBodyNavbar = '165px';
    }
  }

  private updateDesktopLayout(): void {
    this.heightHeader = '100vh';
    this.menuContato = 'block';
    this.showX = true;
    this.showBotao = true;
    // this.topContainerFluid = '405px';
    // this.marginTopBodyNavbar = '365px';
  }


  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.menuContato = 'none';
      this.topContainerFluid = '205px';
    }
  }
}
