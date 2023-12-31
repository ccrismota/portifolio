import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimelineModule } from 'primeng/timeline';
import { AppContentComponent } from './components/app-content/app-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    PortifolioComponent,
    ContatoComponent,
    CurriculoComponent,
    NavbarComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
