import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:any = {
    username : '',
    password : '',
    remeberme : true
  };

  constructor(private usersService: UsersService, private router:Router) { }

  onSubmit(): void {
    console.log('onSubmit called');
    this.usersService.verifyUser(this.user.username, this.user.password).subscribe({
      next: (data: any) => {
        if (data.verify) {
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Login failed: Incorrect username or password');
          // Show error message
        }
      },
      error: (error: any) => {
        console.error('An error occurred:', error);
        // Handle error, e.g., show error message
      }
    });
    
  }
}
