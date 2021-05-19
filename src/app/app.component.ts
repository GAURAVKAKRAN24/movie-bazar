import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-rating';
  showTitle : boolean = false
  constructor(private router : Router){}

  ngOnInit(){
    if(this.router.navigate(['/'])){
      this.showTitle = true
    }
  }
}
