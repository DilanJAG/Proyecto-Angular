import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { windowWhen } from 'rxjs';
import { WebModule } from './web/web.module';
import { NopagesFoundComponent } from './nopages-found/nopages-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NopagesFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    WebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
