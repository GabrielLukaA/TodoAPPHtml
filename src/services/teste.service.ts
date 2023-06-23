import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()

export class TesteService{

    tema = new BehaviorSubject(0)

}