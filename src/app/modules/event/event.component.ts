import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      description: [''],
      value: ['', [Validators.required, Validators.min(0)]],
      pixKey: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log('Evento criado:', this.eventForm.value);
      
    }
  }
}
