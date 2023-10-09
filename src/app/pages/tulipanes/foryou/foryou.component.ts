import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Tulipanes{
  title: string;
  img: string;
  id:string;
}
@Component({
  selector: 'app-foryou',
  templateUrl: './foryou.component.html',
  styleUrls: ['./foryou.component.css']
})
export class ForyouComponent implements OnInit{

  public activateRoute = inject(ActivatedRoute)

  public tulipan?:Tulipanes;
  public id:string = 'No encontrado';


  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
       this.id = params['id'];
       console.log(params)// 'id' debe coincidir con el nombre del parámetro en tu rut
       this.getTulipan(this.id)
    });
  }




  public tulipanes: Tulipanes[]= [
    {
      title: 'No',
      img: 'assets/tulipanes/amarillas.jpg',
      id: 'amarillas.jpg'


    },{
      title: 'sé',
      img: 'assets/tulipanes/black.jpg',
      id: 'black.jpg'
    },{
      title: 'como',
      img: 'assets/tulipanes/blancas.jpg',
      id: 'blancas.jpg'
    },{
      title: 'se',
      img: 'assets/tulipanes/for.jpg',
      id: 'for.jpg'
    },
    {
      title: 'llaman',
      img: 'assets/tulipanes/layout.jpg',
      id: 'layout.jpg'
    },
    {
      title: 'cada',
      img: 'assets/tulipanes/lluvia.jpg',
      id: 'lluvia.jpg'
    },
    {
      title: 'una',
      img: 'assets/tulipanes/moradas.jpg',
      id: 'moradas.jpg'
    },
    {
      title: 'pero',
      img: 'assets/tulipanes/naranja.jpg',
      id: 'naranja.jpg'
    },{
      title: 'Te',
      img: 'assets/tulipanes/unique.jpg',
      id: 'unique.jpg'
    },{
      title: 'gustan',
      img: 'assets/tulipanes/whites.jpg',
      id: 'whites.jpg'
    },
    {
      title: 'mucho',
      img: 'assets/tulipanes/ultima.jpg',
      id: 'ultima.jpg'
    },

  ]

  getTulipan(id: string){

    this.tulipan = this.tulipanes.find(tulipan => tulipan.id === id);

    return this.tulipan;
}

}
