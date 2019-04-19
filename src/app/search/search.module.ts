import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SEARCH_ROUTES, SEARCH_COMPONENTS } from './search.route';
import { SamUIKitModule, SamFilterModule } from '@gsa-sam/sam-ui-elements';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SamUIKitModule,
        SamFilterModule,
        ReactiveFormsModule,
        FormlyModule,
        RouterModule.forChild(SEARCH_ROUTES),
    ],
    declarations: [
        ...SEARCH_COMPONENTS
    ],
    providers: [

    ],

})
export class SearchModule { }
