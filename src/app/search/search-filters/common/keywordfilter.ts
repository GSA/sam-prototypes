import { UntypedFormControl, ValidationErrors } from "@angular/forms";
import { SelectionMode } from "@gsa-sam/components";
import { SdsFormlyTypes } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";

export function booleanSyntax(control: UntypedFormControl): ValidationErrors {
  const ret = /AND|OR|and|or|XOR|&&|<=|>=|<|>|!=|==|&|OR*|!|\|{1,2}/gi.exec(
    control.value
  )
    ? null
    : { booleanSyntax: "Please enter a valid boolean query" };
  return ret;
}

export function extractKeywords(keyword: any): string[] {
  if (!keyword) {
    return null;
  }

  if (typeof keyword === "string") {
    return [keyword];
  }

  if (Array.isArray(keyword)) {
    if (keyword.length === 0) {
      return null;
    } else {
      return keyword;
    }
  }

  if (keyword.keywordTags) {
    if (
      keyword.keywordRadio &&
      (keyword.keywordRadio == "anyWords" || keyword.keywordRadio == "allWords")
    ) {
      let results = [];
      keyword.keywordTags.forEach((tag) => {
        results = results.concat(tag.text.split(" "));
      });
      return results;
    }
    return keyword.keywordTags.map((tag) => tag.text);
  }

  if (keyword.keywordTextarea) {
    return [keyword.keywordTextarea];
  }

  return null;
}

export const keywordFilter: FormlyFieldConfig = {
  key: "keyword",
  type: "keyword",
  templateOptions: {
    label: "Keyword Search",
    description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
    hideOptional: true,
  },
  fieldArray: {
    fieldGroup: [
      // tab 1
      {
        templateOptions: {
          tabHeader: "Simple Search",
        },
        fieldGroup: [
          {
            key: "keywordRadio",
            type: "radio",
            defaultValue: "anyWords",
            templateOptions: {
              options: [
                {
                  label: "Any Words",
                  value: "anyWords",
                },
                {
                  label: "All Words",
                  value: "allWords",
                },
                {
                  label: "Exact Match",
                  value: "exactMatch",
                },
              ],
            },
          },
          {
            key: "keywordTags",
            type: "autocomplete",
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
              },
            },
          },
        ],
      },
      //tab 2
      {
        templateOptions: {
          tabHeader: "Search Editor",
          submitButtonId: "booleanSearchSubmit",
        },
        fieldGroup: [
          {
            key: "keywordTextarea",
            type: SdsFormlyTypes.TEXTAREA,
            className: "display-block padding-left-2 padding-right-2",
            validators: {
              validation: ["booleanSyntax"],
            },
            templateOptions: {
              placeholder:
                'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',
              required: true,
            },
          },
          {
            type: SdsFormlyTypes.BUTTON,
            id: "booleanSearchSubmit",
            className:
              "display-block margin-top-1 padding-left-2 padding-right-2",
            templateOptions: {
              text: "Search",
              type: "submit",
            },
          },
        ],
      },
    ],
  },
};
