import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GithubProjectPageComponent} from './pages/github-project-page/github-project-page.component';

const routes: Routes = [
  {
    path: ':user/:name',
    component: GithubProjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
