import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule  } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulesModule } from './Shared/shared-modules/shared-modules.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';

import { HomeModule } from './Home page/home.module' ;
import { CarModule } from './Car/car.module';
import { AdminModule } from './admin/admin.module';

import { MaxlengthPipe } from './Pipe/maxlength.pipe';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { InterceptorService } from './Services/inceptor/interceptor.service';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { TokenInterceptorService } from './token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MaxlengthPipe,
    ScrollToTopComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule,
    CarModule,
    AdminModule,

    HomeModule, BrowserAnimationsModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
