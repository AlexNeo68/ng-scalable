import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from 'app/models/frontend';
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
  items: ControlItem[];

  constructor(private fb: FormBuilder) {
    this.items = [
      { label: 'First', value: 1 },
      { label: 'Second', value: 2 },
      { label: 'Third', value: 3 },
      { label: 'Fourth', value: 4 },
      { label: 'Fifth', value: 5 },
    ];
  }

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
      password: [null, [Validators.required, Validators.minLength(6)]],
      select: [null, [Validators.required]],
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
