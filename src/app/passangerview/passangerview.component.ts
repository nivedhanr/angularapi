import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passangerview',
  templateUrl: './passangerview.component.html',
  styleUrls: ['./passangerview.component.css']
})
export class PassangerviewComponent {
  constructor(private api:ApiService){
    api.fetchpassenger().subscribe(
    (response)=>{
      this.passenger=response;
    }
    )
  }
  passenger:any=[]
}