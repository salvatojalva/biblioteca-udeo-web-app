import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DivisionesService } from 'src/app/core/core/models/divisiones.service';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss']
})
export class DivisionListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private divisionService: DivisionesService // Instanciamos nuestro objeto
  ) { }

  ngOnInit(): void {
    this.list(); //llamamos a la funcion creada(init es lo primero que buscar el navegador)
  }

  list(){
    this.subItem = this.divisionService.getAll() //Esta dentro de scaffol y es metodo que nos manda una URL hacia appi auth
      .subscribe( //Que es subscrine mas detallado
        (res:any) => { //Funcion Flecha mas detallado
          this.items = res;
        },
        err => console.error(err) //Recoje error en consola
      );
    this.subArray.push(this.subItem);//se crea un arreglo con lo que trae subitem
    //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  }
  //Elimina el arreglo cuando se deja de utilizar
  ngOnDestroy(): void{
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }
  /*
  -> unsubscribe
  Elimina los recursos de la suscripción. Puede, por ejemplo,
  cancelar una ejecución Observable en curso o cancelar cualquier
  otro tipo de trabajo que comenzó cuando se creó la Suscripción.
  */



}









