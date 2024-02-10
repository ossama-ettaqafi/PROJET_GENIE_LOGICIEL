import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    const currentTitle = "Fondation Abdelouahed El Kadiri"
    const newTitle = "Accueil - ";
    this.titleService.setTitle(newTitle + currentTitle);
  }
}
