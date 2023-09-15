import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { MainComponent } from './pages/main/main.component';
import { RulesComponent } from './pages/rules/rules.component';
import { MatchComponent } from './components/match/match.component';
import { ResultComponent } from './pages/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamFormComponent,
    MainComponent,
    RulesComponent,
    MatchComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
