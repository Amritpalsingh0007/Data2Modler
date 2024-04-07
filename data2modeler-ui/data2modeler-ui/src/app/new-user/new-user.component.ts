import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { verify } from 'crypto';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  user = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,}(?:\s+[a-zA-Z]+)*$/),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [ 
      Validators.required,
      Validators.pattern(/^[A-Za-z][a-zA-Z0-9]+$/),
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z\d@$!%*?&]+$/),
      Validators.minLength(8),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z\d@$!%*?&]+$/),
      Validators.minLength(8),
      this.matchPasswordValidator,
    ]),
    tnc: new FormControl(false, [Validators.requiredTrue]),
  });

  isFormSubmitted = false;

  constructor(private usersService: UsersService, private router: Router) {}

  matchPasswordValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const password = control.root.get('password');
    const confirmPassword = control.value;

    if (password && confirmPassword !== password.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

  usernameValidator = (control: FormControl): Observable<{ [key: string]: boolean } | null> => {
    const username = control.value;
  
    return this.usersService.verifyUserName(username).pipe(
      map((isTaken: boolean) => {
        return isTaken ? { usernameTaken: true } : null;
      })
    );
  }
  

  onSubmit() {
    this.isFormSubmitted = true;
    if (!this.user.valid) {
      this.user.markAllAsTouched();
      return;
    }

    this.usersService.addUser(this.user.value).subscribe({
      next: (data: any) => {
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
