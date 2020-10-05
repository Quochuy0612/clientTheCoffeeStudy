import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultCoffeeComponent } from './body/default-coffee/default-coffee.component';
import { DefaultStudyComponent } from './body/default-study/default-study.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './body/login/login.component';
import { SignupComponent } from './body/signup/signup.component';
import { ProductsComponent } from './body/products/products.component';
import { ScheduleComponent } from './body/schedule/schedule.component';
import { TranscriptComponent } from './body/transcript/transcript.component';
import { TestQuizzesComponent } from './body/test-quizzes/test-quizzes.component';
import { SpecificTranscriptComponent } from './body/specific-transcript/specific-transcript.component';
import { SignupClassScheduleComponent } from './body/signup-class-schedule/signup-class-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultCoffeeComponent,
    DefaultStudyComponent,
    BannerComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    ScheduleComponent,
    TranscriptComponent,
    TestQuizzesComponent,
    SpecificTranscriptComponent,
    SignupClassScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
