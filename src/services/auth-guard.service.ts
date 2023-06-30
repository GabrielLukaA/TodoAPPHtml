import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardsCheckEnd, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
}



}