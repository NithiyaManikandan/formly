import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Formly';
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions | any = [
    {
      formState: {
        model: this.model,
      },
    },
  ];
  // fields1: FormlyFieldConfig[] = [
  // {
  //   key: 'firstName',
  //   // wrappers: ['panel'],
  //   type: 'input',
  //   templateOptions: {
  //     label: 'FirstName',
  //   },
  //   validators: {
  //     validation: ['first']
  //   }
  // },
  // {
  //   key: 'age',
  //   type: 'input',
  //   // wrappers: ['panel'],
  //   templateOptions: {
  //     // type: '',
  //     label: 'Age',
  //   },
  //   validators: {
  //     validation: ['first']
  //   }
  // },
  // {
  //   key: 'nationId',
  //   type: 'select',
  //   // wrappers: ['panel'],
  //   templateOptions: {
  //     label: 'NationId',
  //     options: this.service.getNationId(),
  //   },
  // },
  // {
  //   key: 'city',
  //   type: 'select',
  //   // wrappers: ['panel'],
  //   templateOptions: {
  //     label: 'City',
  //     options: [],
  //   },
  //   expressionProperties: {
  //     'templateOptions.disabled': model => !model.nationId,
  //     'model.cityId': '!model.nationId ? null: model.cityId',
  //   },
  //   hideExpression: model => {
  //     return !model.nationId;
  //   },
  // hooks: {
  //   onInit: (fields: FormlyFieldConfig | any) => {
  //     startWith(this.model.nationId)
  //     fields.templateOptions.options =
  //       fields.form.get('nationId').valueChanges.pipe(
  //         switchMap((nationId:number) => this.service.getCities(nationId))
  //       )
  //   },
  // },
  // },
  // fields1: FormlyFieldConfig[] = [
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'name',
  //       type: 'input',
  //       props: {
  //         key: 'name',
  //         label: 'name',
  //         type: 'input',
  //         className: 'col-6',
  //         dependentRow: 'name',
  //         required: true,
  //         minLength: 3,
  //         description: 'enter name',
  //         pattern: '^[a-zA-Z]*$',
  //       },
  //     },
  //     {
  //       key: 'address',
  //       type: 'input',
  //       props: {
  //         key: 'address',
  //         label: 'address',
  //         type: 'input',
  //         dependentRow: 'name',
  //         className: 'col-6',
  //       },
  //     },
  //   ],
  // },
  // {
  //   key: 'terms',
  //   label: 'terms',
  //   type: 'multicheckbox',
  //   options: [
  //     {
  //       label: 'Dealer',
  //       value: 1,
  //     },
  //     {
  //       label: 'Marina',
  //       value: 2,
  //     },
  //     {
  //       label: 'Repair Center',
  //       value: 3,
  //     },
  //   ],
  //   defaultValue: 2,
  // },
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'a',
  //       type: 'input',
  //       props: {
  //         key: 'a',
  //         label: 'a',
  //         type: 'input',
  //         dependentRow: 'a',
  //         className: 'col-6',
  //       },
  //     },
  //     {
  //       key: 'b',
  //       type: 'input',
  //       props: {
  //         key: 'b',
  //         label: 'b',
  //         type: 'input',
  //         dependentRow: 'a',
  //         className: 'col-6',
  //       },
  //     },
  //     {
  //       key: 'c',
  //       type: 'input',
  //       props: {
  //         key: 'c',
  //         label: 'c',
  //         type: 'input',
  //         dependentRow: 'a',
  //         className: 'col-6',
  //       },
  //     },
  //   ],
  // },
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'd',
  //       type: 'input',
  //       props: {
  //         key: 'd',
  //         label: 'd',
  //         type: 'input',
  //         dependentRow: 'd',
  //         className: 'col-6',
  //       },
  //     },
  //     {
  //       key: 'e',
  //       type: 'input',
  //       props: {
  //         key: 'e',
  //         label: 'e',
  //         type: 'input',
  //         dependentRow: 'd',
  //         className: 'col-6',
  //       },
  //     },
  //   ],
  // },
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'f',
  //       type: 'input',
  //       props: {
  //         key: 'f',
  //         label: 'f',
  //         type: 'input',
  //         dependentRow: 'f',
  //         className: 'col-6',
  //       },
  //     },
  //     {
  //       key: 'g',
  //       type: 'input',
  //       props: {
  //         key: 'g',
  //         label: 'g',
  //         type: 'input',
  //         dependentRow: 'f',
  //         className: 'col-6',
  //       },
  //     },
  //   ],
  // },
  // {
  // key: 'select',
  // type: 'select',
  // label: 'h',
  // defaultValue: 2,
  // required: true,
  // className: 'col-3',
  // options: [
  //   { value: 1, label: 'xxxx' },
  //   { value: 2, label: 'yyyy' },
  //   { value: 3, label: 'zzzz' },
  //   { value: 4, label: 'uuuuu' },
  // ],
  // },
  // ];

  constructor(private service: DataServiceService) {}

  fields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      console.log(res);
      this.fields = res;
      this.fields.forEach((formFields: any) => {
        if (formFields.fieldGroup) {
          const size = formFields.fieldGroup['length']
            ? 'col-' + 12 / formFields.fieldGroup['length']
            : 0;
          formFields.fieldGroup.forEach((formField: any) => {
            formField.validators = {
              validation: ['first'],
            };
            formField.props.required = true;
            formField.className = size;
          });
        } else {
          formFields.templateOptions = {
            label: formFields.label,
            options: formFields.options,
            required: true,
          };
          formFields.validators = {
            validation: ['first'],
          };
          if (formFields.defaultValue) {
            this.model = {
              [formFields.key]: {
                [formFields.defaultValue]: true,
              },
            };
          }
        }
      });
    });
  }
  getPermission() {
    if (this.form.dirty) {
      alert('Are u sure?');
    }
  }
  onSubmit(form: any) {
    console.log(form.value);
  }
}
