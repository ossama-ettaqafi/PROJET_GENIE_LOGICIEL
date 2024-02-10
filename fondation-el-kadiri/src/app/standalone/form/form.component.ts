import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() data: any;

  message: string | undefined;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    const formData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    this.http.post<any>('http://localhost:3000/send-email', formData).subscribe(
      response => {
        console.log(response);
        this.message = 'Email sent successfully.';
        form.reset();
      },
      error => {
        console.error(error);
        this.message = 'Error sending email: ' + error.message;
      }
    );
  }
}
