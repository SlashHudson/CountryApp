import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

public country?: Country;  //El conuntry? se establece con una ? por que all inicio es NULL, no contiene ningun valor hasta adespues se le asigna 


constructor(
  private activatedRoute: ActivatedRoute,
  private CountriesService:CountriesService,
  private router: Router
  
  ){}
  ngOnInit(): void {
    this.activatedRoute.params //sirve para leer la URL puesta 
    .pipe(
      switchMap( ({id})=> this.CountriesService.searchCountryByAlphaCode(id) ),
    )
    .subscribe((country) =>{   //en este caso es la "id" por que es lo que establecimos en las rutas
    
      if(!country ){
        return this.router.navigateByUrl('');
      }
      console.log('TENEMOS UN PAÍS');
      
      return this.country = country;
      
      
    });
  }

}
