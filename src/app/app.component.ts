import { Component } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public  val:any=[];
  public mainData:any=[];
  
  constructor(private http:HttpClient) { }

   onClick(UserName,repoName){

    if(UserName && repoName){
         this.http.get(`https://api.github.com/repos/${UserName}/${repoName}`)
   .subscribe(values =>this.val.push(values))
  }
    else if(UserName){
      this.http.get(`https://api.github.com/users/${UserName}/repos`)
      .subscribe(values =>this.val=values)
      
    }
    else{
      alert("Enter the UserName")
    }
   }
   OnEachClick(a,b){
 
     let obj={
       name:a,
       fork:b
     }
 
     this.mainData.push(obj);
 
     console.log(this.mainData)
 
   }
}
