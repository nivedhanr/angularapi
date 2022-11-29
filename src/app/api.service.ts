import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchpassenger=()=>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30.")
    
    }
    fetchproduct=()=>
  {
    return this.http.get("https://dummyjson.com/products")
    
    }
    fetchpublicapi=()=>
    {
      return this.http.get("https://reqres.in/api/users?page=1")
      
      }
      fetchquotes=()=>
    {
      return this.http.get("https://dummyjson.com/quotes")
      
      }
      fetchtodo=()=>
    {
      return this.http.get("https://dummyjson.com/todos")
      
      }
      fetchuspublic=()=>
    {
      return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      
      }
      fetchuserdata=()=>
    {
      return this.http.get("https://dummyjson.com/users")
      
      }

    
  }

