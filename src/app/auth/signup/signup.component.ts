import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form : any
  userArray : any = []
  isLoading : boolean = false
  
  constructor(private router : Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(){
    this.isLoading = true
    localStorage.setItem('user', JSON.stringify(this.form.value))
    setTimeout(() =>{
      this.router.navigate(['/login'])
    }, 3000)
    
  }

}
