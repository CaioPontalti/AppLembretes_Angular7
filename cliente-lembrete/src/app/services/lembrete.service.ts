import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';


@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getLembretes(): Observable<Lembrete[]>{
    const url = `${environment.lembreteApiUrl}/Lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembrete(id: number): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/Lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  postLembrete(lembrete: Lembrete): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/Lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  putLembrete(lembrete: Lembrete): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/Lembrete/${lembrete.Id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deleteLembrete(id: number): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/Lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}
