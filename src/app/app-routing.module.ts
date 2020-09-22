import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  { path: 'suma', component: SumaComponent },
  { path: 'resta', component: RestaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
