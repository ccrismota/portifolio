import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { HeaderComponent } from './components/header/header.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { SobreComponent } from './components/sobre/sobre.component';


const appRoutes: Routes = [
  { path: '', component: HeaderComponent,

  children: [
    { path: '', component: SobreComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'portifolio', component: PortifolioComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'curriculo', component: CurriculoComponent },
  ]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
    appRoutes, { enableTracing: true }
    )
    ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
