import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemplateRefrenceVariableComponent } from './components/template-refrence-variable/template-refrence-variable.component';
import { TwowayBindingComponent } from './components/twoway-binding/twoway-binding.component';
import { NgIfngSwitchComponent } from './components/ng-ifng-switch/ng-ifng-switch.component';
import { ChildComponent } from './components/child/child.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { OrderPipe } from './pipes/order.pipe';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefrenceVariableComponent,
    TwowayBindingComponent,
    NgIfngSwitchComponent,
    ChildComponent,
    PipeComponent,
    OrderPipe,
    UserComponent,
    UserDetailComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
