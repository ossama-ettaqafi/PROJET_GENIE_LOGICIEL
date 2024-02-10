import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router'; // Import ParamMap to access route parameters
import { of, switchMap } from 'rxjs';
import { ElementsService } from 'src/app/services/elements/elements.service';
import { LongService } from 'src/app/services/long/long.service';

@Component({
  selector: 'app-side-img-side-txt',
  templateUrl: './side-img-side-txt.component.html',
  styleUrls: ['./side-img-side-txt.component.css'],
})
export class SideImgSideTxtComponent implements OnInit {
  data: any;

  constructor(
    private longService: LongService,
    private router: Router,
    private route: ActivatedRoute,
    private elementsService: ElementsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = params.get('id');
          if (id) {
            const urlSegments: UrlSegment[] = this.router.parseUrl(
              this.router.url
            ).root.children['primary'].segments;

            if (urlSegments.some((segment) => segment.path == 'evenements')) {
              return this.elementsService.getEventById(id);
            }

            if (urlSegments.some((segment) => segment.path == 'publications')) {
              return this.elementsService.getPubById(id);
            }

            if (urlSegments.some((segment) => segment.path == 'presse')) {
              return this.elementsService.getNewById(id);
            }

            return this.longService.getDataById(id);
          }
          // Default return value
          return of(null);
        })
      )
      .subscribe((result: any) => {
        this.data = result;
      });
  }
}
