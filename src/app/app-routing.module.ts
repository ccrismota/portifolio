import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const appRoutes: Routes = [
  { path: '', component: AppContentComponent,

  children: [
    { path: '', component: SobreComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'portifolio', component: PortfolioComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'curriculo', component: CurriculoComponent },
    {
      path: '**', redirectTo: 'sobre', pathMatch: 'full'
    }
  ]},
  // path: '', redirectTo: 'character', pathMatch: 'full'
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
