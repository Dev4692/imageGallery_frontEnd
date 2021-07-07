import { Injectable, Injector  } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let userService = this.injector.get(UserService); // to get the token
    let tokenizedReq = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${userService.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)
  }
}
