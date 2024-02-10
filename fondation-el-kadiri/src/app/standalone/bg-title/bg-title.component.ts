import { Component, Input, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bg-title',
  templateUrl: './bg-title.component.html',
  styleUrls: ['./bg-title.component.css']
})
export class BgTitleComponent implements OnChanges {
  @Input() data: any;

  constructor(private titleService: Title) { }

  ngOnChanges(): void {
    if (this.data && this.data.title) {
      const currentTitle = "Fondation Abdelouahed El Kadiri"
      const newTitle = `${this.data.title} - `;
      this.titleService.setTitle(newTitle + currentTitle);
    }
  }
}
