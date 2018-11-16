import { Component, OnInit } from '@angular/core';
import { SessionsService, ISession } from '../sessions.service';
import { ActivatedRoute } from '@angular/router';

const defaultSession: ISession = {
    id: 0,
    name: '',
    location: '',
    startTime: new Date(),
    createdAt: null,
    updatedAt: null,
}

@Component({
  templateUrl: './session-detail.component.html',
})
export class SessionsDetailComponent implements OnInit {

    session: ISession = {...defaultSession};
    startTimeAsString = defaultSession.startTime.toISOString();

  constructor(
      private sessionsService: SessionsService,
      private route: ActivatedRoute,
      ) { }

  ngOnInit() {
    let idAsString = this.route.snapshot.paramMap.get('entityId');
    let id = isNaN(parseInt(idAsString)) ? 0 : parseInt(idAsString);
    console.log(id);
  }

  submit(): void {
    console.log(this.session);
    console.log(defaultSession);
    this.sessionsService.createSession(this.session)
      .subscribe
  }
}
