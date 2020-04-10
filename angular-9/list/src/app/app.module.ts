import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AngularListComponent } from './components/angular-list/angular-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AngularListComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // create custom elements from angular components
    const angularList = createCustomElement(AngularListComponent, { injector: this.injector });
    // define in browser registry
    customElements.define('angular-list', angularList);
  }
}
