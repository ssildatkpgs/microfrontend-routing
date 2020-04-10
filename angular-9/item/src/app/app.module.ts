import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngularItemComponent } from './components/angular-item/angular-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AngularItemComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // create custom elements from angular components
    const angularItem = createCustomElement(AngularItemComponent, { injector: this.injector });
    // define in browser registry
    customElements.define('angular-item', angularItem);
  }
}
