import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ElementsService } from 'src/app/services/elements/elements.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  data: any[] | undefined;

  constructor(
    private elementsService: ElementsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Events
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments.some((segment) => segment.path === 'evenements')) {
        this.elementsService.getAllEvents().subscribe(
          (data: any[]) => {
            this.data = data.map(item => ({ ...item, page_title: 'Evenements' }));
          },
          (error) => {
            console.error('Error fetching events data:', error);
          }
        );
      }
    });

    // News
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments.some((segment) => segment.path === 'presse')) {
        this.elementsService.getAllNews().subscribe(
          (data: any[]) => {
            this.data = data.map(item => ({ ...item, page_title: 'Presse' }));
          },
          (error) => {
            console.error('Error fetching presse data:', error);
          }
        );
      }
    });

    // Pubs
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments.some((segment) => segment.path === 'publications')) {
        this.elementsService.getAllPubs().subscribe(
          (data: any[]) => {
            this.data = data.map(item => ({ ...item, page_title: 'Publications' }));
          },
          (error) => {
            console.error('Error fetching pubs data:', error);
          }
        );
      }
    });
  }
}
