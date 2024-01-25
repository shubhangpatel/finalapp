import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  
  mydata:any
  url = "http://localhost:8000/"
  constructor(private httpclient:HttpClient,private router:Router){

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      firstName: new FormControl(null),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log(formData)
    
      // Send a POST request with the form data
      this.httpclient.post(this.url + 'login', formData).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/deleteData'])
          // Handle the response as needed
        },
        error: (err) => {
          console.log(err);
          // Handle the error as needed
        }
      });
    } else {
      // Mark all fields as touched to display validation errors
      this.markAllAsTouched(this.loginForm);
    }
  }

  markAllAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}
