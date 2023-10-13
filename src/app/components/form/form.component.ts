import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  orderForm: FormGroup;
  name: string = '';
  showSuccess = false;

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      this.orderForm.reset();
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === '.') {
      event.preventDefault(); // Prevent typing a dot
    }
  }

  get nameHasError() {
    return (
      this.orderForm.get('name')?.invalid && this.orderForm.get('name')?.touched
    );
  }

  get addressHasError() {
    return (
      this.orderForm.get('address')?.invalid &&
      this.orderForm.get('address')?.touched
    );
  }

  get telHasError() {
    return (
      this.orderForm.get('tel')?.invalid && this.orderForm.get('tel')?.touched
    );
  }
}
