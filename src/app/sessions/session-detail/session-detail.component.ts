import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISession, SessionsService } from '../sessions.service';


@Component({
  templateUrl: './session-detail.component.html',
})
export class SessionsDetailComponent implements OnInit {

  session: ISession;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionsService: SessionsService,
  ) { }

  ngOnInit() {
    let id: string | number = this.route.snapshot.paramMap.get('sessionId');
    // tslint:disable-next-line:radix
    id = isNaN(parseInt(id)) ? 0 : parseInt(id);
    if (id > 0) {
      // get from db
      this.sessionsService.getSessionById(id)
        .subscribe((session) => {
          const startTime = new Date(session.startTime);
          startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
          session.startTime = startTime.toISOString().slice(0, 16);
          this.session = session;
        });
    } else {
      // new
      this.session = {
        id: 0,
        name: '',
        location: '',
        startTime: this.getLocalDateTime(),
        createdAt: '',
        updatedAt: '',
      };
    }
  }

  getLocalDateTime(): string {
    const startTime = new Date();
    startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
    return startTime.toISOString().slice(0, 16);
  }

  save(): void {
    this.sessionsService.save(this.session)
      .subscribe((session) => {
      console.log(session);
      this.router.navigate(['sessions']);
      });
  }

  cancel(): void {
    this.router.navigate(['sessions']);
  }
}
