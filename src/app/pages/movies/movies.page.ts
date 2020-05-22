import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service'



@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results;
  searchTerm: string = '';
  tipo:string='';
  pagina:number=1;
  
  pag1:number=1;
  pag2:number=0;
  pag3:number=0;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  sigPag()
  {
    if(this.pagina<100)
    this.pagina=this.pagina + 1;
  }

  prevPag()
  {
    if(this.pagina>1)
    this.pagina=this.pagina - 1;
  }
  searchChanged(t:number) {
    if(this.searchTerm == '')
    {
      this.pagina = 1;
      this.tipo = ''
    }
    if(t==1)
    {
      this.pagina=1;
    }
    this.results = this.movieService.searchData(this.searchTerm, this.tipo + '&page=' + this.pagina);
  }

}
