import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from 'app/models/frontend';
import { NotificationService } from 'app/services';
import { markFormGroupTouched, regex, regexErrors } from 'app/shared/utils';

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

  showSpinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
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
          Validators.pattern(regex.numbers),
        ],
      ],
      autocomplete: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      select: [null, [Validators.required]],
      checkboxes: [null, [Validators.required]],
      radios: [null, [Validators.required]],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      dateRange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  patchForm(): void {
    this.form.patchValue({
      input: 123,
      password: 'qwerty',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2019, 5, 25).getTime(),
      },
    });
  }

  onToggleInline(): void {
    this.isInline = !this.isInline;
  }

  onSubmit(): void {
    console.log('submit');
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }

  onDisable(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpiner(): void {
    this.showSpinner = !this.showSpinner;
  }
  onSuccess(): void {
    this.notificationService.success('All right!');
  }
  onError(): void {
    this.notificationService.error('Something went wrong!');
  }
}
