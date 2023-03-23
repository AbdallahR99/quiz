import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromeCheckerService {

  constructor(private httpClient: HttpClient) { }

  checkPalindrome(str: string) {
    return this.httpClient.get(`api/checkPalindrome/${str}`);
  }
}
