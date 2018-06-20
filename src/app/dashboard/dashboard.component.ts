import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userCategories: Array<any>;

  constructor(private userService: UserService) {
    this.userService.getUserCategories().subscribe((data: any) => {
      this.userCategories = data;
    });
  }

  ngOnInit() {
  }

}
