  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadJokesTermCountsComponent } from './dad-jokes-term-counts/dad-jokes-term-counts.component';


const routes: Routes = [
  { path: '', component: DadJokesTermCountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }