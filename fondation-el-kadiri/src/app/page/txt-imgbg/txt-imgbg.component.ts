import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ElementsService } from 'src/app/services/elements/elements.service';
import { ShortService } from 'src/app/services/short/short.service';

@Component({
  selector: 'app-txt-imgbg',
  templateUrl: './txt-imgbg.component.html',
  styleUrls: ['./txt-imgbg.component.css']
})
export class TxtImgbgComponent {
  data: any;

  constructor(private shortService: ShortService, private elementsService:ElementsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to changes in route parameters
    this.route.paramMap.subscribe((params: ParamMap) => {

      const id = params.get('id'); // Get the 'id' parameter from the route parameters

      if (id) {
        // Fetch data based on the 'id' parameter
        this.shortService.getDataById(id).subscribe((result: any) => {
          this.data = result;
        });
      }
    });
  }
}
