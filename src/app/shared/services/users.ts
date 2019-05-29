
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';




@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {

    }

    getUserByEmail(email: string) {

        return this.httpClient.get('http://localhost:3000/users?email=${email}')
            .pipe(
                map((user: User[]) => {
                    return user[0] ? user["users"] : undefined;
                }
                ))

    }
}