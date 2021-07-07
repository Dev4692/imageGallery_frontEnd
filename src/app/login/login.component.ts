import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: any = {};
  userLogin: any = {};

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  login(loginDetails:any){
    if(!(typeof loginDetails.emailId === 'undefined') && loginDetails.emailId != null && loginDetails.emailId != '' && 
    !(typeof loginDetails.password === 'undefined') && loginDetails.password != null && loginDetails.password != ''){
      this.userLogin = sessionStorage.setItem(loginDetails.emailId,'loginDetails.emailId');
      this.userService.login(loginDetails).subscribe(data => {
        let user = data.user;
         // Use of "Subject" to receive data after login
        this.userService.userName.next(user);
        localStorage.setItem('token',data.token);// storing the JSON token
        let loggedIn = true;
        this.router.navigate(['/subscribe',{loggedIn}]);
      }, error => {
        alert(error.error);
      })
    } else {
      alert('Please entered required Field');
    }
    
  }
  //To Register New User
  openManageUser(){
    this.router.navigate(['/manageuser']);
  }

}
