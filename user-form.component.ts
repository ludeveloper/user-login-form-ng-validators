import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="submitForm()">
      <h1>Login</h1>

      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username" />
      </div>

      <div
        *ngIf="username.invalid && (username.dirty || username.touched)"
        id="username-error"
      >
        <div *ngIf="username.errors.required" class="error-msg">
          Username is required.
        </div>
        <div *ngIf="username.errors.minlength" class="error-msg">
          Username must be at least 5 characters long.
        </div>
        <div *ngIf="username.errors.maxlength" class="error-msg">
          Username cannot exceed 10 characters.
        </div>
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" />
      </div>

      <div
        *ngIf="password.invalid && (password.dirty || password.touched)"
        id="password-error"
      >
        <div *ngIf="password.errors.required" class="error-msg">
          Password is required.
        </div>
        <div *ngIf="password.errors.minlength" class="error-msg">
          Password must be at least 6 characters long.
        </div>
      </div>

      <button type="submit" [disabled]="userForm.invalid">Submit</button>
    </form>
  `,
  styles: [
    `
      form {
        background-color: #acceed;
        width: 400px;
        height: 400px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 50px;
        border-radius: 30px;
      }
      h1 {
        margin-bottom: 20px;
        color: dimgray;
      }
      label,
      input {
        font-size: 14px;
        font-weight: 400;
        margin: 5px 0;
      }
      label {
        margin-top: 15px;
      }
      input {
        height: 30px;
        border-radius: 5px;
      }
      .error-msg {
        color: darkred;
        font-size: 12px;
      }
      button {
        width: 100px;
        margin-top: 15px;
        font-weight: 600;
        background-color: green;
        color: white;
        width: 120px;
        height: 35px;
        border-radius: 10px;
      }
      button:disabled {
        font-weight: 400;
        background-color: #999;
        color: #777;
        cursor: wait;
      }
    `,
  ],
})
export class UserFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  userForm!: FormGroup;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {}

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }
}
// made by Lutfullah Ugurer @LuDeveloper www.ludeveloper.com
