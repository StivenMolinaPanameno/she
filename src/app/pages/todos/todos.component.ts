import { Component, Input } from '@angular/core';
interface Tulipanes{
  title:string;
  img:string;
  id: string;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

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
    {
      title: 'presioname',
      img: 'assets/tulipanes/presioname.jpg',
      id: 'presioname.jpg'
    },

  ]

  getTulipan(id: string):Tulipanes|undefined{

      return this.tulipanes.find(tulipan => tulipan.img === id);

  }

}
