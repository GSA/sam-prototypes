import { Component, Inject } from '@angular/core';
import { SdsDialogRef, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';

@Component({
    selector: 'add-subawardee-modal',
    templateUrl: './add-subawardee-modal.component.html',
})
export class AddSubawardeeModalComponent {
    constructor(@Inject(SDS_DIALOG_DATA) public data: any,
        public dialogRef: SdsDialogRef<AddSubawardeeModalComponent>) { }
    model = {}
    onSaveData($event) {
        console.log($event);
    }
    onCancel() {

        this.dialogRef.close();
    }
    onSubmit() {
        this.dialogRef.close(this.model);
    }
}

