import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AngularButtonComponent } from './components/angular-button/angular-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AngularButtonComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // create custom elements from angular components
    const angularButton = createCustomElement(AngularButtonComponent, { injector: this.injector });
    // define in browser registry
    customElements.define('angular-button', angularButton);
  }
}
