import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavpanelComponent } from './navpanel/navpanel.component';
import {MatCardModule} from '@angular/material/card';
import { ProductoComponent } from './producto/producto.component';

import { NavPanelComponent } from './componentes/main/nav-panel/nav-panel.component';

import {NgbModule}  from '@ng-bootstrap/ng-bootstrap';
import { NavPanelonComponent } from './nav-panelon/nav-panelon.component';
import { ProductsmainComponent } from './productsmain/productsmain.component';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ProductService } from './componentes/main/nav-panel/productService';
import { ProducteServicexService } from './shared/service/producte-servicex.service';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import { TituloCentradoMainComponent } from './titulo-centrado-main/titulo-centrado-main.component';     //accordion and accordion tab
                   //api
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavpanelComponent,
    ProductoComponent,
    NavPanelComponent,
    NavPanelonComponent,
    ProductsmainComponent,
    TituloCentradoMainComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    AccordionModule
  
  ],
  providers: [ProductService,ProducteServicexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
