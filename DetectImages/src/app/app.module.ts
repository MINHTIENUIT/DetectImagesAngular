import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FoodbarComponent } from './footbar/footbar.component';
import { HomeComponent } from './home/home.component';
import { DetectFilesComponent } from './detect-files/detect-files.component';
import { DetectUrlComponent } from './detect-url/detect-url.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FoodbarComponent,
    HomeComponent,
    DetectFilesComponent,
    DetectUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
