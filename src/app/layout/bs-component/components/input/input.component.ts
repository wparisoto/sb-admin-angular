import { Component, OnInit, AfterContentInit, ContentChild, Input } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip = true;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa se usado com uma diretiva ngModel ou FormControlName');
    }
  }

hasSuccess(): boolean {
  return this.input.valid && (this.input.dirty || this.input.touched);
}

hasError(): boolean {
  return !this.input.valid && (this.input.dirty || this.input.touched);
}

}
