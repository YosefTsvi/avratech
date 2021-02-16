import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from '../weather.service';
import { from } from 'rxjs';
import { ErrorComponent } from './error/error.component';
import { CoinsComponent } from './coins/coins.component';
import { MoneyComponent } from './money/money.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', component: CoinsComponent },
  // { path: 'Weather', component: WeatherComponent },
  { path: 'coins', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    ErrorComponent,
    CoinsComponent,
    MoneyComponent,
    AboutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {

}