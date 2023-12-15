import { Component, OnInit } from '@angular/core';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public icon: string = ETheme.DARK_MODE_ICON;
  public theme: string = ETheme.LIGHT;

  constructor() { }

  public changeIcon() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark');
    console.log(isDarkMode);
    
    if (!isDarkMode) {
      body.classList.add('dark');
      body.classList.remove('light');

      this.theme = ETheme.DARK;
      this.icon = ETheme.LIGHT_MODE_ICON;
      
    } else {
      body.classList.add('light');
      body.classList.remove('dark');

      this.theme = ETheme.LIGHT;
      this.icon = ETheme.DARK_MODE_ICON;
    }

  }

  ngOnInit(): void {
    this.changeIcon();
  }

}
