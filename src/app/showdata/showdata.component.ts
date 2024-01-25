import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showdata',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './showdata.component.html',
  styleUrl: './showdata.component.css'
})
export class ShowdataComponent {
  url = "http://localhost:8000/"
  constructor(private httpclient:HttpClient){

  }
  mydata:any
  getData(){
    this.httpclient.get(this.url+'getData').subscribe({
      next :(data)=>{
      
      console.log(data)
      this.mydata=data
    },
     error :(err)=>{
      console.log(err)
     }})
  }
}
