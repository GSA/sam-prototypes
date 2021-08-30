import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { FeedItemType, RequestItem, RequestStatus, requestStatusMap } from '../../services/interfaces/public-apis';

@Component({
  selector: 'request-item',
  templateUrl: './request-item.component.html'
})
export class RequestItemComponent implements OnInit {

  @Input() model: RequestItem

  @ViewChild('defaultTemplate', { static: false })
  defaultTemplate: TemplateRef<any>;

  @ViewChild('roleTemplate', { static: false })
  roleTemplate: TemplateRef<any>;

  @ViewChild('entityHierarchyRoleTemplate', { static: false })
  entityHierarchyRoleTemplate: TemplateRef<any>;

  @ViewChild('titleChangeTemplate', { static: false })
  titleChangeTemplate: TemplateRef<any>;

  @ViewChild('hierarchyChangeTemplate', { static: false })
  hierarchyChangeTemplate: TemplateRef<any>;

  @ViewChild('cfdaNumberChangeTemplate', { static: false })
  cfdaNumberChangeTemplate: TemplateRef<any>;

  @ViewChild('assistanceListingTemplate', { static: false })
  assistanceListingTemplate: TemplateRef<any>;

  @ViewChild('ombApprovalTemplate', { static: false })
  ombApprovalTemplate: TemplateRef<any>;

  @ViewChild('systemAccountTemplate', { static: false })
  systemAccountTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  getStatusLabel(status: RequestStatus) {
    return requestStatusMap.get(status);
  }

  isPending(status: RequestStatus) {
    return status == RequestStatus.Pending;
  }

  isApproved(status: RequestStatus) {
    return status == RequestStatus.Approved;
  }

  isRejected(status: RequestStatus) {
    return status == RequestStatus.Rejected;
  }

  getTemplate(itemType: FeedItemType) {
      switch(itemType) {
        case FeedItemType.Role: {
          return this.roleTemplate;
        }
        case FeedItemType.EntityHierarchyRole: {
          return this.entityHierarchyRoleTemplate;
        }
        case FeedItemType.TitleChange: {
          return this.titleChangeTemplate;
        }
        case FeedItemType.HierarchyChange: {
          return this.hierarchyChangeTemplate;
        }
        case FeedItemType.CFDANumberChange: {
           return this.cfdaNumberChangeTemplate;
        }
        case FeedItemType.AssistanceListing: {
          return this.assistanceListingTemplate;
        }
        case FeedItemType.OMBApproval: {
          return this.ombApprovalTemplate;
        }
        case FeedItemType.SystemAccount: {
          return this.systemAccountTemplate;
        }
        default: {
          return this.defaultTemplate;
        }
      }
  }

}