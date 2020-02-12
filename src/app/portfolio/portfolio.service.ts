import {
  HttpClient,
} from '@angular/common/http';
import {
  Injectable,
} from '@angular/core';
import {
  Observable,
} from 'rxjs/Observable';

@Injectable()
export class PortfolioService {
  educationData: any = [];
  experienceData: any = [];
  skillsData: any = [];

  constructor(private http: HttpClient) {
  }

  skills(): Observable<any> {
    return this.skillsData;
  }

  education(): Observable<any> {
    return this.educationData;
  }

  experience(): Observable<any> {
    return this.experienceData;
  }
}
