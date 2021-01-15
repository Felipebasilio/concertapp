import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
   el.nativeElement.style.color = '#e35e6b' 
  }

}

/**Diretiva criada para alterar a cor de um elemento(Diretiva não estrutural) */