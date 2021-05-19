import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin : any 
  constructor(private loginService : LoginService) { }
  ngOnInit(): void {
    // this.isLogin = Boolean(JSON.parse(localStorage.getItem('login') || '{}'))
    this.isLogin = Boolean(localStorage.getItem('login'))
  }

  logout(){
    this.loginService.logout();
    this.isLogin = false
  }

}
