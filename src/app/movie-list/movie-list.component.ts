import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MovieService } from './../services/movie.service';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  page : number = 1
  totalLength : any
  movieDetail : any = []
  showClearFilter : boolean = false
  searchForm : any
  title : any = ''
  year : any = ''
  rating : any = ''
  noResultFound : boolean = false
  constructor(private movieService : MovieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.noResultFound = false
    this.movieService.getMovieList().subscribe((data :any)=>{
      this.movieDetail = data
      this.totalLength = this.movieDetail.length
      console.log("Length ", this.totalLength)
      console.log(this.movieDetail)
    })

    this.searchForm = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      rating: new FormControl(''),
    });
  }


  searchByTitle(){
      if(this.title != ''){
        this.showClearFilter = true
        this.movieDetail = this.movieDetail.filter((element: any) => {
          return element.Title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
        });
      }
      else if(this.title === ''){
        this.showClearFilter = false
        this.ngOnInit()
      }      
      this.totalLength = this.movieDetail.length
  }


  searchByYear(){
    if(this.year != ''){
      this.showClearFilter = true
      this.movieDetail = this.movieDetail.filter((element: any) => {
        return element.Year.toLocaleLowerCase().match(this.year.toLocaleLowerCase())
      });
    }
    else if(this.year === ''){
      this.showClearFilter = false
      this.ngOnInit()
    }
    if(this.movieDetail.length <= 0){
      this.noResultFound = true
    }

    console.log(this.movieDetail, this.movieDetail.length)
    this.totalLength = this.movieDetail.length
  }

  searchByRating(){
    if(this.rating != ''){
      this.showClearFilter = true
      this.movieDetail = this.movieDetail.filter((element: any) => {
        return Number(element.imdbRating) >= this.rating
      });
    }
    else if(this.rating === null){
      this.showClearFilter = false
      this.ngOnInit()
    }  
    this.totalLength = this.movieDetail.length
  }

  clearFilter(){
    this.title = ''
    this.year = ''
    this.rating = ''
    this.ngOnInit()
  }

  showMoviePreview(movie : any){
    this.dialog.open(MoviePreviewComponent, {
      width : '750px',
      data : {
        movie : movie
      }
    })
  }

}
