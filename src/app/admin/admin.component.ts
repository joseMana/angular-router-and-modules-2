import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { user } from '../shared/models/user';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public searchKey: string;

  public users: user[];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.filterUser(params.username);
      }
    );
  }

  public searchUser(): void {
    this.logger.logVisitCountOfService();
    this.router.navigate(["admin"], {queryParams: {username: this.searchKey}});
  }

  private filterUser(searchKey: string): void {    
    this.users = this.userService.getUsers();

    if (searchKey) {
      this.users = this.users.filter(u => u.name === searchKey);
    }
  }

  public navigateToUser(id: number): void {
    this.router.navigate(["admin/user", id])
  }
}
