import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  isOpen: Boolean = false;
  constructor(private overlay: Overlay) { }

  ngOnInit(): void {
  }

  openFromComponent(){
    const overlayRef = this.overlay.create({
      hasBackdrop: true, // la cortina gris
      backdropClass: 'overlay-backdrop', //color de la cortina
      panelClass: 'overlay-panel', // el panel
      positionStrategy: this.overlay // la ubicacion/posicion
        .position()
        .global() // ocupa toda la pantalla
        .centerHorizontally()
        .centerVertically()
    });

    const dialogPortal = new ComponentPortal(CardComponent); //creacion del componente
    overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach()); // cerrar el overlay haciendo click a la cortina
  }

}
