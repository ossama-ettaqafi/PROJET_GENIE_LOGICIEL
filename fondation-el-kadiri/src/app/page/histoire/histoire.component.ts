import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    const currentTitle = "Fondation Abdelouahed El Kadiri"
    const newTitle = `Histoire - `;
    this.titleService.setTitle(newTitle + currentTitle);
  }
}
