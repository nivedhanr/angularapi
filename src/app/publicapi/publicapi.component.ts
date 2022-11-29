import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publicapi',
  templateUrl: './publicapi.component.html',
  styleUrls: ['./publicapi.component.css']
})
export class PublicapiComponent {
  constructor(private api:ApiService){

    api.fetchpublicapi().subscribe(
      (response)=>{this.data=response;})

  }

  data:any=[]
}