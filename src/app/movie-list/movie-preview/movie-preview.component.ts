import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {
  movie : any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.movie = this.data.movie
    console.log(this.movie)
  }

}
