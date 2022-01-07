import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { ShopbagComponent } from './shopbag/shopbag.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownsearchComponent } from './dropdownsearch/dropdownsearch.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes=[

  {
    path: 'shopbag', component: ShopbagComponent,
  },
  {
    path: '', component: CategorycardComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CategorycardComponent,
    ShopbagComponent,
    DropdownsearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
