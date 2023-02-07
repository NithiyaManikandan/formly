import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function Validator(
  control: AbstractControl,
  field: FormlyFieldConfig
): ValidationErrors {
  if (field.templateOptions?.label === 'address') {
    return /(^[a-zA-Z0-9\s,.'/-]{3,}$)/.test(control.value)
      ? {}
      : { first: false };
  } else if (field.templateOptions?.label === 'terms') {
    return Object.values(control.value).includes(true) ? {} : { first: false };
  }
  else if (field.templateOptions?.label === 'h' || 'radio') {
    return control.value ? {} : { first: false };
  } else if (
    field.templateOptions?.label === 'a' ||
    'b' ||
    'c' ||
    'd' ||
    'e' ||
    'f' ||
    'g'
  ) {
    return /(^[a-zA-Z]{3,}$)/.test(control.value) ? {} : { first: false };
  } else {
    return {};
  }
}
