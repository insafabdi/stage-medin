import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public Catégorie :string;
 public medecin : string;
 public patient : string;
  showPassword=true;
  constructor() { }
  visibility(){
    this.showPassword=!this.showPassword;
  }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
  console.log(data)
  }
  b(b:any){
    
  }
  
  // password: string = '';
  // c_password: string = '';
  // toggle1: boolean = false;
  // toggle2: boolean = false;
  // changeType(input_field_password, num){
  //   if(input_field_password.type=="password")
  //     input_field_password.type = "text";
  //   else
  //     input_field_password.type = "password";

  //   if(num == 1)
  //     this.toggle1 = !this.toggle1;
  //   else
  //     this.toggle2 = !this.toggle2;
  // }


}
