import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: user;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  public navigateToUser(id: number): void {
    this.router.navigate(["admin/user", id])
  }

}
