import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SobreComponent,
    PortifolioComponent,
    ContatoComponent,
    CurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
