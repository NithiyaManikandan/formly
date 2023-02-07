import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl,FormControl } from '@angular/forms';
import { FieldType, FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent extends FieldWrapper implements OnInit {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  override fieldComponent!: ViewContainerRef
  // static createControl(model: any, field: FormlyFieldConfig) {
  //   let controlGroupConfig = field.templateOptions?.options?.toString
  //   console.log(controlGroupConfig);
  // }

  // override field : any =[]

  // getField(){
  //   return null
  // }
  ngOnInit(): void {
  }
}
