import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-contract-data-landing',
  templateUrl: './contract-data-landing.component.html',
  styleUrls: ['./contract-data-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractDataLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public reportsTraining = [
    {
      title: 'Full class on contract data reports',
      articles: [
        {
          title: 'Part 1: Introduction and static reports (11:16)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Part 2: Standard reports and drilling (19:03)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Part 3.1: Ad hoc reports using the report builder (15:33)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Part 3.2: Ad hoc reports using a blank report (10:29)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Part 3.3: Ad hoc reports post-execution functions (09:24)',
          link: '/help',
          icon: 'sds fa-video-square'
        }
      ]
    },
    {
      title: 'Ad hoc reports tutorial series',
      articles: [
        {
          title: 'Introduction: What are ad hoc reports and do I need them? (07:38)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Tutorial 1: Making an ad hoc reports from a blank report (08:12)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Tutorial 1A: Making an ad hoc reports using the report builder (09:30)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Tutorial 2: Building a complex report filter (07:57)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Tutorial 3: Filtering, drilling, and sorting (08:16)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Tutorial 4: Advanced filtering, sharing, and scheduling (08:33)',
          link: '/search',
          icon: 'sds fa-video-square'
        }
      ]
    },
    {
      title: 'Intermediate and advanced videos',
      articles: [
        {
          title: 'Share and send reports (07:04)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'How to drill into reports (04:54)',
          link: '/help',
          icon: 'sds fa-video-square'
        },
        {
          title: 'Using granular metrics to filter ad hoc reports (06:20)',
          link: '/help',
          icon: 'sds fa-video-square'
        }
      ]
    }
  ];

}
