import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Validator } from './validation';
import {
  minLengthErrorMessage,
  patternErrorMessage,
  requiredErrorMessage,
  ValidatorMessage,
} from './validationMessage';

@NgModule({
  declarations: [AppComponent, WrapperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'first', validation: Validator },
      ],
      validationMessages: [
        { name: 'first', message: ValidatorMessage },
        { name: 'pattern', message: patternErrorMessage },
        { name: 'required', message : requiredErrorMessage},
        { name: 'minLength', message: minLengthErrorMessage },
      ],
      // wrappers: [{ name: 'form-field', component: WrapperComponent }],
      // types: [{
      //    name: "multicheckbox",
      //    component: WrapperComponent ,
      //   //  wrappers:['form-field']
      //   }],
    }),
    FormlyBootstrapModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
