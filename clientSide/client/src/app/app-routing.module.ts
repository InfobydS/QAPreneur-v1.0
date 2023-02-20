// import { ComponentPortal } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MainComponent } from './components/main/main.component';
import { TestMainComponent } from './components/test-main/test-main.component';
import { TestComponent } from './components/test/test.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'landing'
  },

  {
    path : 'landing',
    component: LandingPageComponent
  },

  {
    path : 'Dashboard',
    component : DashboardComponent
  },

  {
    path : 'WelcomeTest',
    component : TestMainComponent
  },

  {
    path : 'Test',
    component : TestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
