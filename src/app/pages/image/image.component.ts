import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Tulipanes{
  title: string;
  img:string;
  id:string;
  parrafo?: string;
}
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{


  public activateRoute = inject(ActivatedRoute)

  public tulipan?:Tulipanes;
  public id:string = 'No encontrado';


  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
       this.id = params['codigo'];
       console.log(params) // 'id' debe coincidir con el nombre del parámetro en tu rut
       this.getTulipan(this.id)
    });
  }

  public tulipanes: Tulipanes[]= [
    {
      title: 'No',
      img: 'assets/tulipanes/amarillas.jpg',
      id: 'amarillas.jpg',
      parrafo: 'Los tulipanes amarillos son una variante vibrante y alegre de la popular flor. Su color brillante simboliza la felicidad y la alegría, transmitiendo sentimientos de amistad y optimismo al regalarlos. Existen varias variedades con tonalidades únicas de amarillo y formas de flor. Se plantan en otoño para florecer en primavera y requieren suelo bien drenado y sol. Son populares en arreglos florales para eventos festivos. En algunas culturas, el amarillo representa prosperidad y buena suerte. Los tulipanes amarillos florecen en primavera y son una opción encantadora para embellecer jardines y espacios interiores.'


    },{
      title: 'sé',
      img: 'assets/tulipanes/black.jpg',
      id: 'black.jpg',
      parrafo: 'Los tulipanes negros, aunque no son literalmente negros, tienen un tono muy oscuro y profundo, a menudo descrito como púrpura oscuro. Son conocidos por su inusual coloración y se asocian con elegancia y profundidad de sentimientos. Son populares en arreglos florales sofisticados y pueden añadir un toque distintivo a jardines y espacios interiores. Requieren cuidados similares a otras variedades de tulipanes y se plantan en otoño para florecer en primavera.'
    },{
      title: 'como',
      img: 'assets/tulipanes/blancas.jpg',
      id: 'blancas.jpg',
      parrafo: 'Los tulipanes blancos son conocidos por su elegancia y pureza simbolizada por su color blanco brillante. Son populares en bodas y ocasiones especiales por su aspecto limpio y sofisticado. Hay una variedad de tonos y formas de tulipanes blancos. Su cuidado es similar al de otras variedades y florecen en primavera. Regalar tulipanes blancos puede transmitir esperanza y optimismo, y son apreciados en celebraciones y festivales en algunas culturas asiáticas. En resumen, los tulipanes blancos son una opción clásica y elegante para adornar eventos y espacios con su belleza pura y atemporal.'
    },{
      title: 'se',
      img: 'assets/tulipanes/for.jpg',
      id: 'for.jpg',
      parrafo: 'Los tulipanes rojos son una variante vibrante y apasionada de esta popular flor. Su color rojo brillante simboliza el amor y la pasión, transmitiendo emociones intensas y románticas. Existen varias variedades con diferentes tonalidades de rojo y formas de flor. Requieren cuidados similares a otras variedades de tulipanes y se plantan en otoño para florecer en primavera. Son populares en arreglos florales para expresar sentimientos de amor y devoción. Los tulipanes rojos son una elección clásica y conmovedora para celebrar el amor y la conexión emocional.'
    },
    {
      title: 'llaman',
      img: 'assets/tulipanes/layout.jpg',
      id: 'layout.jpg',
      parrafo: 'Los tulipanes rosados son una variante encantadora y delicada de esta popular flor. Su color rosa suave simboliza el amor, la gratitud y la admiración, transmitiendo sentimientos de cariño y aprecio. Existen varias variedades con diferentes tonalidades de rosa y formas de flor. Requieren cuidados similares a otras variedades de tulipanes y se plantan en otoño para florecer en primavera. Son populares en arreglos florales para expresar afecto y ternura. Los tulipanes rosados son una elección tierna y encantadora para celebrar la amistad y demostrar cariño hacia alguien especial.'
    },
    {
      title: 'cada',
      img: 'assets/tulipanes/lluvia.jpg',
      id: 'lluvia.jpg',
      parrafo: 'Este está bien bonito, igual que tú.'
    },
    {
      title: 'una',
      img: 'assets/tulipanes/moradas.jpg',
      id: 'moradas.jpg',
      parrafo: 'Los tulipanes morados son conocidos por su color rico y profundo que varía desde tonalidades intensas hasta matices más suaves y lavanda. Este color está asociado históricamente con la realeza y la nobleza, transmitiendo sentimientos de admiración y respeto. Existen diversas variedades de tulipanes morados, cada una con su propio tono y forma de flor. Son versátiles y se combinan bien con una variedad de colores en arreglos florales, añadiendo un toque de elegancia y misterio. En resumen, los tulipanes morados son flores cautivadoras que ofrecen una rica paleta de colores y un simbolismo de nobleza y admiración.'

    },
    {
      title: 'pero',
      img: 'assets/tulipanes/naranja.jpg',
      id: 'naranja.jpg',
      parrafo: 'Los tulipanes naranja son conocidos por su vibrante color, simbolizando energía y vitalidad. Existen varias variedades con tonalidades que van desde el intenso y brillante hasta tonos más suaves y pastel. Requieren cuidados similares a otras variedades de tulipanes y se plantan en otoño para florecer en primavera. Son populares en arreglos florales por su capacidad para añadir vitalidad y calidez. También son una elección popular para diseñar jardines y paisajes. El color naranja en los tulipanes representa la alegría y la positividad, haciéndolos ideales para transmitir emociones positivas en diversas ocasiones.'
    },{
      title: 'Te',
      img: 'assets/tulipanes/unique.jpg',
      id: 'unique.jpg',
      parrafo: 'Esta es única como tú.'

    },{
      title: 'gustan',
      img: 'assets/tulipanes/whites.jpg',
      id: 'whites.jpg',
      parrafo: 'Al igual que los tulipanes blancos, tu presencia ilumina cada lugar con gracia y pureza. Eres una luz radiante en mi vida.'
    },
    {
      title: 'mucho',
      img: 'assets/tulipanes/ultima.jpg',
      id: 'ultima.jpg',
      parrafo: '"La vanidad y el orgullo son cosas diferentes, aunque las palabras se usen como sinónimos con frecuencia. Una persona puede ser orgullosa sin ser vanidosa. El orgullo se relaciona más con nuestra opinión de nosotros mismos; la vanidad, con lo que quisiéramos que otros pensaran de nosotros." - Seguro sabes de quién es..."'
    },{
      title: 'presioname',
      img: 'assets/tulipanes/presioname.jpg',
      id: 'presioname.jpg',
      parrafo: 'No hay parrafo, por desgaste de ideas'
    },

  ]

  getTulipan(id: string):Tulipanes|undefined{

      return this.tulipan = this.tulipanes.find(tulipan => tulipan.id === id);


  }
}
