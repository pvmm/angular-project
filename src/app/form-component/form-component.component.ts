import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SampleService } from '../services/sample-service.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponent implements OnInit {
  // Define the form group
  form: FormGroup;

  ngOnInit() {
  }

  constructor(private fb: FormBuilder, private service: SampleService) {
    // Initialize the form with form controls
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.service.search(this.form.value).then(
        (solicitacao) => {
          console.log("OK!");
        },
        (e: HttpErrorResponse) => {
          console.log("ERROR!", e);
        }
      );
    }
  }
}

