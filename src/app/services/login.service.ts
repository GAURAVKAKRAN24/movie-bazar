import { Injectable } from '@angular/core';
import {Router} from '@angular/router' 
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user : any = {}
  constructor(private router : Router, private MovieService : MovieService) { }

  login(form : any){
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(this.user)
    if(form.value.email === this.user.email && form.value.password === this.user.password){
      JSON.stringify(localStorage.setItem('login', 'true'))
      console.log(form.value)
      setTimeout(()=>{
        this.router.navigate(['/movies'])
      }, 2000)
    }
    else{
      window.alert("Didn't find the user Please sign up!")
    }
  }

  logout(){
    localStorage.removeItem('login')
    console.log("Logout")
    window.location.reload();
  }
}
