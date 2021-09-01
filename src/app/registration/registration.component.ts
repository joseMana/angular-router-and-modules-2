import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  register(): void {
    alert('thank you!');

    this.router.navigate(['login']);
  }

  public canDeactivate() : boolean {
    if (!this.username && !this.password) {
      return true;
    } else {
      return window.confirm("You have changes. Do you want to ignore these?")
    }
  }

}
