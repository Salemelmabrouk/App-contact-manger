import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchPassword') controlNameToMatch: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToMatch = control.parent?.get(this.controlNameToMatch);

    if (controlToMatch && controlToMatch.value !== control.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
}