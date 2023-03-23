import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PalindromeCheckerService } from './core/services/palindrome-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  palindromeString = 'madam';

  palindRomeResult = 'Enter a string to check if it is a palindrome';

  isLoading = false;

  constructor(private palindrome: PalindromeCheckerService) {}

  checkIfPalindrome(str: string) {
    this.isLoading = true;
    this.palindrome.checkPalindrome(str).subscribe({
      next: (res: any) => {
        if (res.isPalindrome) {
          this.palindRomeResult = 'The string is a palindrome';
        } else {
          this.palindRomeResult = 'The string is not a palindrome';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.palindRomeResult =
          'An error occurred while checking if the string is a palindrome';
        this.isLoading = false;
      },
    });
  }
}
