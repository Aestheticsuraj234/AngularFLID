import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlidDataService {
  flid: string = '';
  url = `https://uatagreementAPI.banksekure.com/api/AgentAgreement/LeegalityESingRequest?Flid=${this.flid}`


  constructor(private http: HttpClient) { }

  saveFlid(flid: string) {
    return this.http.post(this.url, flid);
  }
}
