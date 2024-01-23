import {Injectable} from '@angular/core';
import {Person} from "../../model/Person";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ListPersonnelServiceService {

  private urlServer:any = {};

  constructor(private readonly httpClient: HttpClient) {
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);
  }

  fetch(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.urlServer.allEmployees);
  }

  search(name: string): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.urlServer.filterByName.replace(':name', name));
  }

  fetchRandom(): Observable<Person> {
    return this.httpClient.get<Person>(this.urlServer.randomEmployee);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(this.urlServer.oneEmployeeById.replace(':id', id));
  }

  create(employe: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.urlServer.allEmployees, employe);
  }

  fetchOne(id: string): Observable<Person> {
    return this.httpClient.get<Person>(this.urlServer.oneEmployeeById.replace(':id', id));
  }

  update(employe: Person): Observable<Person> {
    return this.httpClient.put<Person>(this.urlServer.oneEmployeeById.replace(':id', employe.id), employe);
  }
}
