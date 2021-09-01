import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../admin/services/logger.service';
import { UserService } from '../core/services/user.service';
import { user } from '../shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: user;
  public isUserRole: boolean;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.logger.logVisitCountOfService();

    const currId = this.route.snapshot.params.id;
    if (currId) {
      this.user = this.userService.getUser(currId);
      this.isUserRole = false;
    } else {
      const isLoggedIn = localStorage.getItem('isAuthenticated');
      const userInfo = localStorage.getItem('userInfo');

      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo);
        if (isLoggedIn) {
          this.user = this.userService.getUser(userInfoParsed.id);
          this.isUserRole = true;
        }
      }    
    }   
    
  }
}
