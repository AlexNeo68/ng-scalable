import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from 'app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline: boolean = false;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.email),
        ],
        ,
      ],
    });
  }

  patchForm(): void {
    this.form.patchValue({ input: 'inputPatched' });
  }

  onToggleInline(): void {
    this.isInline = !this.isInline;
  }

  onSubmit(): void {
    console.log('Submit');
  }
}
