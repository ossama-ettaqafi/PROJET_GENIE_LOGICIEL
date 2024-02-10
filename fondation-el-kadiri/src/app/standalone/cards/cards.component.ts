import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() data: any;

  constructor(private titleService: Title) { }

  ngOnChanges(): void {
    if (this.data) {
      const currentTitle = "Fondation Abdelouahed El Kadiri"
      const newTitle = `${this.data?.[0]?.page_title} - `;
      this.titleService.setTitle(newTitle + currentTitle);
    }
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }

}
