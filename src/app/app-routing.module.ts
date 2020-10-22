import { NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './body/blog/blog.component';
import { DefaultCoffeeComponent } from './body/default-coffee/default-coffee.component';
import { DefaultStudyComponent } from './body/default-study/default-study.component';
import { LoginComponent } from './body/login/login.component';
import { ProductsComponent } from './body/products/products.component';
import { ScheduleComponent } from './body/schedule/schedule.component';
import { SignupClassScheduleComponent } from './body/signup-class-schedule/signup-class-schedule.component';
import { SignupComponent } from './body/signup/signup.component';
import { SpecificTranscriptComponent } from './body/specific-transcript/specific-transcript.component';
import { TestQuizzesComponent } from './body/test-quizzes/test-quizzes.component';
import { TranscriptComponent } from './body/transcript/transcript.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coffee',
    pathMatch: 'full'
  },
  {
    path: 'coffee',
    component: DefaultCoffeeComponent
  },
  {
    path: 'study',
    component: DefaultStudyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'signupclassschedule',
    component: SignupClassScheduleComponent
  },
  {
    path: 'SpecificTranscript',
    component: SpecificTranscriptComponent
  },
  {
    path: 'TestQuizzes',
    component: TestQuizzesComponent
  },
  {
    path: 'Transcript',
    component: TranscriptComponent
  },
  {
    path: 'Blog',
    component: BlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
