import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class reqJwtInterceptor implements HttpInterceptor{

    constructor(private authenticationService: AuthenticationService){}
intercept(request:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{

    let user=this.authenticationService.currentUserValue;
    if(user && user.token){
        request=request.clone({
            setHeaders: { 
                Authorization: `Bearer ${user.token}`
            }
        });
    }
    return next.handle(request);

}
}