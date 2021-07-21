import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsAutocompleteModule, SdsTabsModule } from "@gsa-sam/components";
import { FormlyModule } from "@ngx-formly/core";
import { booleanSyntax } from "../search-filters/common/keywordfilter";
import { FormlyKeywordComponent } from "./keywords";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsAutocompleteModule,
    FormsModule,
    SdsTabsModule,
    FormlyModule.forChild({
      types: [
        {
          name: "keyword",
          component: FormlyKeywordComponent,
        },
        
      ],
    }),
    FormlyModule.forRoot({
      validators: [
        { name: 'booleanSyntax', validation: booleanSyntax },
      ],
      validationMessages: [
        { name: 'booleanSyntax', message: 'Please enter valid boolean operation' },
      ]
    })
  ],
  declarations: [
    FormlyKeywordComponent
  ],
})
export class SearchFormlyModule {}
