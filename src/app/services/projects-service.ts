import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../shared/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjetos(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/projects.json');
  }
}
