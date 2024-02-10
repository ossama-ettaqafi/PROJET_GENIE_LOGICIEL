import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent {
  @Input() data: any;

  constructor(private titleService: Title) {}

  ngOnChanges(): void {
    if (this.data && this.data.title) {
      const currentTitle = 'Fondation Abdelouahed El Kadiri';
      const newTitle = `${this.data.title} - `;
      this.titleService.setTitle(newTitle + currentTitle);
    }
  }
}
