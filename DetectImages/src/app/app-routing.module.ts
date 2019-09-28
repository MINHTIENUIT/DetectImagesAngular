import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetectFilesComponent } from './detect-files/detect-files.component';
import { DetectUrlComponent } from './detect-url/detect-url.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detect-files', component: DetectFilesComponent},
  {path: 'detect-urls', component: DetectUrlComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
