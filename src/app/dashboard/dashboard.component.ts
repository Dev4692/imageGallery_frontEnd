import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDetails: any;
  userName: string='';
  logIn = false
  constructor(public router: Router,
    public userService: UserService) { 
      this.userService.userName.subscribe(res=>{
       this.userDetails = res;
       this.userName = this.userDetails.firstName;
       this.logIn = true;
      })
    }

  ngOnInit(): void {
   
  }

  loginClick(){
    this.router.navigate(['/login']);
  }

  logoutClick() {
    this.logIn = false
    this.userService.loggedOut();
    this.router.navigate(['/home']);
  }
}
