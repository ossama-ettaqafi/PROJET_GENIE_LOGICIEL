import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  data: any;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
