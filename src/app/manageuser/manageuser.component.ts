import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
  @Input () userDetails:any = {};

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Create User
  registerUser(userDetails: any) {
    this.userService.manageUser(userDetails).subscribe(data => {
      let user = userDetails;
      alert('User added successfully!');
      this.router.navigate(['/login']);
    }, error => {
      alert('Email Already Exist!');
    })
  }

  //Cancel Registration and navigate back to login page
  cancelRegistration() {
    this.router.navigate(['/login']);
  }

}
