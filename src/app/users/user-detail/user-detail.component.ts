import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';

@Component({
    templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

    user: IUser;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
    ) { }

    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('userId');
        // tslint:disable-next-line:radix
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id > 0) {
            // get from db
            this.usersService.getUserById(id)
                .subscribe((user) => {
                    this.user = user;
                });
        } else {
            // new
            this.user = {
                id: 0,
                firstName: '',
                lastName: '',
                title: '',
                createdAt: '',
                updatedAt: '',
            };
        }
    }

    save(): void {
        this.usersService.save(this.user)
            .subscribe((user) => {
                this.router.navigate(['users']);
            });
    }

    cancel(): void {
        this.router.navigate(['users']);
    }
}
