import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userForm: FormGroup;
  mydata:any
  url = "http://localhost:8000/"
  display :any ={}
  constructor(private httpclient:HttpClient){

  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.display=this.userForm.value
      console.log(formData)
    
      // Send a POST request with the form data
      this.httpclient.post(this.url + 'postData', formData).subscribe({
        next: (response) => {
          console.log(response);
          // Handle the response as needed
        },
        error: (err) => {
          console.log(err);
          // Handle the error as needed
        }
      });
    } else {
      // Mark all fields as touched to display validation errors
      this.markAllAsTouched(this.userForm);
    }
  }

  

  markAllAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
  
}
