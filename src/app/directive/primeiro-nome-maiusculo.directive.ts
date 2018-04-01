import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPrimeiroNomeMaiusculo]'
})
export class PrimeiroNomeMaiusculoDirective {

  @Input() appPrimeiroNomeMaiusculo: string;
}
