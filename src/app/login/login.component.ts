import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public showInvalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.username === 'admin@magenic.com' && this.password === 'admin') {

      const loggedInUser = {
        id: 1,
        role: 'admin',
        subRole: 'Manager'
      };

      localStorage.setItem('userInfo', JSON.stringify(loggedInUser));
      localStorage.setItem('isAuthenticated', 'true');

      this.router.navigate([
        'admin'
      ]);

    } else if (this.username === 'marvinba@magenic.com' && this.password === 'password1') {
      const loggedInUser = {
        id: 1,
        role: 'user',
        subRole: 'Developer'
      };

      localStorage.setItem('userInfo', JSON.stringify(loggedInUser));
      localStorage.setItem('isAuthenticated', 'true');

      this.router.navigate([
        'user'
      ]);
    }
    else {
      this.showInvalidLogin = true;
    }
  }

  public onRegisterClick(): void {
    this.router.navigate(['register']);
  }

}
