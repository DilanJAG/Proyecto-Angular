import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    FooterComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent,
    BreadcrumbsComponent
  ],
})
export class SharedModule { }
