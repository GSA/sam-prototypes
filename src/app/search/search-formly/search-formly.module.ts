import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsAutocompleteModule, SdsTabsModule } from "@gsa-sam/components";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
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
    })
  ],
  declarations: [
    FormlyKeywordComponent
  ],
})
export class SearchFormlyModule {}
