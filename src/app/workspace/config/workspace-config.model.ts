import { FormlyFieldConfig } from '@ngx-formly/core';

export interface WorkspaceConfig {
    id: string;
    title: string;
    filters: FormlyFieldConfig[];
}