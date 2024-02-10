import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  data: any;

  constructor(private contactService: ContactService, private titleService: Title) { }

  ngOnInit(): void {
    this.contactService.getData().subscribe(response => {
      this.data = response;
    });

    const currentTitle = "Fondation Abdelouahed El Kadiri"
    const newTitle = `Contact - `;
    this.titleService.setTitle(newTitle + currentTitle);
  }
}
