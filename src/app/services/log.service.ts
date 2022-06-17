import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Log } from "../models/Log";

@Injectable()
export class LogService {
  logs: Log[];

  private logSourse = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSourse.asObservable();

  constructor() {
    this.logs = [
      { id: "1", text: "Gen comp", date: new Date("12/23/2022 14:25:52") },
      { id: "2", text: "Added boot", date: new Date("12/24/2022 17:26:52") },
      { id: "3", text: "Logs comp", date: new Date("12/25/2022 13:25:52") },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSourse.next(log);
  }
}
