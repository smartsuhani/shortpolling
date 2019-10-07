import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, retryWhen, zip, map} from 'rxjs/operators';
import {range, timer} from 'rxjs';

@Component({
  selector: 'app-short-poll',
  templateUrl: './short-poll.component.html',
  styleUrls: ['./short-poll.component.css']
})
export class ShortPollComponent implements OnInit {

  status: any;
  statusText: any;
  i = 0;
  generated: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getStatus().subscribe((d) => {
      this.generated = d.generated;
      console.log(this.generated);
    }, (e) => {
    });
  }

  getStatus() {
    const observable = this.http.get('http://localhost:3004/shortpoll/' + (this.i = this.i + 1)).pipe(map((res: any) => {
      if (!res.generated) {
        this.getStatus().subscribe((d) => {
          this.generated = d.generated;
        }, (e) => {
        });
      }
      return res;
    }));
    const maxTries = 20;
    const ms = 1000;
    this.status = observable.pipe(retryWhen(attempts => range(1, maxTries)
      .pipe(
        zip(attempts, (i) => i),
        mergeMap(i => timer(i * ms))
      )
    ));
    return this.status;
  }
}

