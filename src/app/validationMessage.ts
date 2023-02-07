import { FormlyFieldConfig } from '@ngx-formly/core';

export function ValidatorMessage(err: any, field: FormlyFieldConfig) {
  if (field.templateOptions?.label === 'address') {
    return `${field.templateOptions?.label} is invalid (eg : 71,xxxxx)`;
  } else if (field.templateOptions?.label === 'terms') {
    return `${field.templateOptions?.label} is required`;
  } else if (
    field.templateOptions?.label === 'a' ||
    'b' ||
    'c' ||
    'd' ||
    'e' ||
    'f' ||
    'g'
  ) {
    return `${field.templateOptions?.label} is invalid (eg : xxx)`;
  } else {
    return '';
  }
}

export function patternErrorMessage(err: any, field: FormlyFieldConfig) {
  if (field.templateOptions?.label === 'name') {
    return `Invalid pattern ${field.templateOptions?.label}  (eg : xxx)`;
  } else {
    return '';
  }
}

export function minLengthErrorMessage(err: any, field: FormlyFieldConfig) {
  if (field.templateOptions?.label === 'name') {
    return `${field.templateOptions?.label} minimum length should be 3`;
  } else {
    return '';
  }
}

export function requiredErrorMessage(err: any, field: FormlyFieldConfig) {
  console.log(field);
  return `${field.templateOptions?.label} is required`;
}
