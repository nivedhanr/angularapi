import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upublicdata',
  templateUrl: './upublicdata.component.html',
  styleUrls: ['./upublicdata.component.css']
})
export class UpublicdataComponent {
  constructor(private api:ApiService){

    api.fetchuspublic().subscribe(
      (response)=>{this.uspublic=response;})

  }
  uspublic:any=[]
}


