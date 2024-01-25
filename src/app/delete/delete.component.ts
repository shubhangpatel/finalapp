import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  reactiveForm: FormGroup
  url = "http://localhost:8000/"

  constructor(private httpclient: HttpClient) {

  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
       email: new FormControl(null)
    })
  }

  unsubscribe() {
    const data = this.reactiveForm.value.email;
    console.log(data)
    this.httpclient.delete(this.url + "deleteuser", { params: { email : data } })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
