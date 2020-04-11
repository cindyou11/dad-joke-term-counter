import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadJokesTermCountsComponent } from './dad-jokes-term-counts/dad-jokes-term-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    DadJokesTermCountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
