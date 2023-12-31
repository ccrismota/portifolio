import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  icon: string = ETheme.DARK_MODE_ICON;
  theme: string = ETheme.LIGHT;

  constructor(private router: Router) { }

  redirecionarParaRota(rota: string): void {
    this.router.navigate([rota]);
  }

  changeIcon() {
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
    if (this.router.url === '/') {
      this.redirecionarParaRota('/sobre');
    }
  }

}
