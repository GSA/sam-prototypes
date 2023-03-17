import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

import { SystemAccountsService } from "../../../services/system-accounts-service/system-accounts.service";

@Injectable({
  providedIn: "root",
})
export class SystemAccountEditorService {
  form = new FormGroup({});
  model: any = { selectedIndex: 0 };
  stepValidityMap = {};

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "system-information",
      fieldGroup: [
        {
          key: "accountName",
          type: "input",
          templateOptions: {
            label: "System Account Name",
            description: "Provide a unique name for your new system account",
            placeholder: "e.g. None",
            required: true,
          },
        },
        {
          key: "interfacingSystem",
          type: "input",
          templateOptions: {
            label: "Interfacing System Name and Version",
            description:
              "Provide the name and version number of the interfacing system (COTS, GOTS, or other product) for inclusion in our system security plan.",
            placeholder: "e.g. None",
            required: true,
          },
        },
        {
          key: "systemDescription",
          type: "textarea",
          templateOptions: {
            label: "System Description",
            description:
              "Provide a brief description of the interfacing system and what it does. This may be taken directly from your system security plan, if you have one.",
            placeholder:
              "e.g. The IRS stated in a current MOU that their system tracks all incoming commitment requsts and captures the information necessary to make awards.",
            required: true,
          },
        },
      ],
    },
    {
      key: "organization-information",
      fieldGroup: [
        {
          key: "organization",
          type: "input",
          templateOptions: {
            label: "Federal Hierarchy",
            description:
              "Select the federal department, independent agency, sub-tier or office responsible for managing this account.",
            placeholder: "e.g. None",
            required: true,
          },
        },
        {
          key: "administrators",
          type: "input",
          templateOptions: {
            label: "System Administrators",
            description:
              "Select up to two of your system administrators to own this account. Only people who have a user account and system administrator role are available for selection.",
            placeholder: "e.g. None",
            required: true,
          },
        },
        {
          key: "managers",
          type: "input",
          templateOptions: {
            label: "System Managers",
            description:
              "Select up to three of your system managers to help manage this account. Only people who have a user account and a system manager role are available for selection.",
            placeholder: "e.g. None",
            required: true,
          },
        },
      ],
    },
    {
      key: "permissions",
      fieldGroup: [
        {
          key: "permissions",
          templateOptions: {
            label: "What permissions do you need?",
            hideOptional: true,
          },
          fieldGroup: [
            {
              key: "opportunities",
              type: "multicheckbox",
              templateOptions: {
                label: "Contract Opportunities",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public",
                  },
                  {
                    value: "read-sensitive",
                    label: "Read Sensitive (Terms of Use)",
                  },
                  {
                    value: "write-public",
                    label: "Write Public",
                  },
                  {
                    value: "write-sensitive",
                    label: "Write Sensitive",
                  },
                ],
              },
            },
            {
              key: "contract-data",
              type: "multicheckbox",
              templateOptions: {
                label: "Contract Data",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public",
                  },
                  {
                    value: "write",
                    label: "Write (Terms of Use)",
                  },
                  {
                    value: "read-dod",
                    label: "Read DoD (Terms of Use)",
                  },
                  {
                    value: "write-dod",
                    label: "Write DoD",
                  },
                ],
              },
            },
            {
              key: "entity-information",
              type: "multicheckbox",
              templateOptions: {
                label: "Entity Information",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public",
                  },
                  {
                    value: "read-fouo",
                    label: "Read For Official Use Only (Terms of Use)",
                  },
                  {
                    value: "read-sensitive",
                    label: "Read Sensitive (Terms of Use)",
                  },
                ],
              },
            },
            {
              key: "federal-hierarchy",
              type: "multicheckbox",
              templateOptions: {
                label: "Federal Hierarchy",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public Only",
                  },
                  {
                    value: "read-fouo",
                    label: "Read For Official Use Only (Terms of Use)",
                  },
                ],
              },
            },
            {
              key: "assistance-listings",
              type: "multicheckbox",
              templateOptions: {
                label: "Assistance Listings",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public",
                  },
                ],
              },
            },
            {
              key: "wage-determinations",
              type: "multicheckbox",
              templateOptions: {
                label: "Wage Determinations",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public",
                  },
                ],
              },
            },
            {
              key: "reference-data",
              type: "multicheckbox",
              templateOptions: {
                label: "Reference Data",
                group: "panel",
                hideOptional: true,
                options: [
                  {
                    value: "read-public",
                    label: "Read Public",
                  },
                ],
              },
            },
          ],
        },
        {
          key: "fipsCategory",
          type: "select",
          templateOptions: {
            label: "Overall FIPS 199 Categorization",
            required: true,
            options: [
              { label: "Low", value: "low" },
              { label: "Medium", value: "med" },
              { label: "High", value: "high" },
            ],
          },
        },
      ],
    },
    {
      key: "security",
      fieldGroup: [
        {
          key: "ipAddress",
          type: "input",
          templateOptions: {
            label: "IP Address",
            description:
              "Provide the dedicated static IP address used by your system. All system to system requests must use this IP address.",
            required: true,
          },
        },
        {
          key: "connectionType",
          type: "select",
          templateOptions: {
            label: "Type of Connection",
            description:
              "Identify whether the connection between the two systems is web-based (HTTP, HTTPS, web service) or a persistent connection (T3, T1, VPN, SFTP).",
            required: true,
            options: [
              { label: "Web Service (HTTP/HTTPS)", value: "http" },
              { label: "Persistent", value: "sftp" },
            ],
          },
        },
        {
          key: "physicalLocation",
          type: "textarea",
          templateOptions: {
            label: "Physical Location",
            description:
              "Provide a brief description of the interfacing system and what it does. This may be taken directly from your system security plan, if you have one.",
            placeholder:
              "e.g. The CWS currently resides at NIH Building 1237 in Bethesda, Maryland",
            required: true,
          },
        },
        {
          key: "official",
          wrappers: ["form-field"],
          templateOptions: {
            label: "Security Official",
            description:
              "Provide the name and email address of the individual responsible for the security of the interfacing system (the ISSO, for example).",
            hideOptional: true,
          },
          fieldGroup: [
            {
              key: "name",
              type: "input",
              templateOptions: {
                label: "Name",
                required: true,
              },
            },
            {
              key: "email",
              type: "input",
              templateOptions: {
                label: "Email Address",
                required: true,
              },
            },
          ],
        },
      ],
    },
    {
      key: "authorization",
      fieldGroup: [
        {
          key: "attachments",
          fieldGroup: [
            {
              template: "<h2>Attachments</h2><button>Attach Document</button>",
            },
          ],
        },
        {
          key: "test",
          type: "checkbox",
          templateOptions: {
            label:
              "I confirm that I am the authorizing official for the requested system account and certify that all of the information provided above is current and accurate.",
          },
        },
      ],
    },
  ];

  constructor(private accountsService: SystemAccountsService) {}

  getFields(id: string): FormlyFieldConfig {
    for (let i = 0; i < this.fields.length; i++) {
      if (id === this.fields[i].key) {
        return this.fields[i];
      }
    }
    return null;
  }
}
