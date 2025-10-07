import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],
})
export class TripCardComponent {
  @Input('trip') trip!: Trip;

  constructor(private router: Router) {}

  public editTrip(): void {
    if (!this.trip || !this.trip.code) {
      console.error('Invalid trip data');
      return;
    }
    // Navigate to the edit-trip page with trip code
    this.router.navigate(['/edit-trip', this.trip.code]);
  }
}
