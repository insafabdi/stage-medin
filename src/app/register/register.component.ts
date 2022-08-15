import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//   public Catégorie :string;
//  public medecin : string;
//  public patient : string;
  showPassword=true;
  constructor() { }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
  console.log(data)
  }
  b(b:any){
    
  }

}
