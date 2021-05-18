import { FormControl, ValidationErrors } from "@angular/forms";
import { SelectionMode } from "@gsa-sam/components";
import { SdsFormlyTypes } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";

export function booleanSyntax(control: FormControl): ValidationErrors {
  const ret = /AND|OR|and|or|XOR|&&|<=|>=|<|>|!=|==|&|OR*|!|\|{1,2}/gi.exec(control.value) ? null : { 'ip': true };
  return ret;
}

export const keywordFilter: FormlyFieldConfig = 
	{
	    key: 'keyword',
	    type: 'keyword',
	    templateOptions: {
				label: 'Keyword Search',
				description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
				group: 'panel',
				hideOptional: true,
	    },
			fieldArray: {
				fieldGroup: [
					// tab 1
					{
						templateOptions: {
							label: 'Keyword Search'
						},
						fieldGroup: [
							{
								key: 'keywordRadio',
								type: 'radio',
								templateOptions: {
									options: [
										{
											label: 'Any Words',
											value: 'anyWords'
										},
										{
											label: 'All Words',
											value: 'allWords'
										},
										{
											label: 'Exact Match',
											value: 'exactMatch'
										}
									]
								}
						 },
						{
							key: 'keywordHierarchy',
							type: 'autocomplete',
							templateOptions: {
								expand: false,
								configuration: {
                  id: "keyword",
                  primaryKeyField: "key",
                  primaryTextField: "text",
                  labelText: "Search Keyword",
                  selectionMode: SelectionMode.MULTIPLE,
                  autocompletePlaceHolderText: "",
                  isTagModeEnabled: true,
                }
							}
						}]
					},
					//tab 2
					{
						key: 'keywordTextarea',
						type: SdsFormlyTypes.TEXTAREA,
            validators: {
              validation: [booleanSyntax],
            },
						templateOptions: {
							label: 'Advanced Search',
              hideOptional: true,
						}
					}
				]
			},
  }