import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent {
  searchTerm: string = '';
  maxPrice: number | null = null;

  trips: Trip[] = [
    {
      _id: '1',
      code: 'DAWRF210214',
      name: "Dawson’s Reef",
      length: '14 nights / 15 days',
      start: new Date('2021-02-14T08:00:00Z'),
      resort: 'Blue Lagoon, 4 stars',
      perPerson: 1199.99,
      image: 'reef2.jpg',
      description: "Dawson’s Reef Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit vulputate, vulputate at est. Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien."
    },
    {
      _id: '2',
      code: 'CLRF210301',
      name: "Claire’s Reef",
      length: '14 nights / 15 days',
      start: new Date('2021-03-01T08:00:00Z'),
      resort: 'Coral Sands, 5 stars',
      perPerson: 1999.99,
      image: 'reef3.jpg',
      description: "Claire’s Reef Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auctor odio. Fusce ac orci nibh, quis semper arcu. Cras orci neque, euismod et accumsan ac, sagittis molestie lorem. Proin odio sapien, elementum at tempor non. Vulputate eget libero. In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis."
    },
    {
      _id: '3',
      code: 'GALR210214',
      name: "Gale Reef",
      length: '14 nights / 15 days',
      start: new Date('2021-02-14T08:00:00Z'),
      resort: 'Emerald Bay, 3 stars',
      perPerson: 799.99,
      image: 'reef1.jpg',
      description: "Gale Reef Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
    },
    {
      _id: '4',
      code: 'MEMRD210501',
      name: "Most Excellent Mega Reef Dive",
      length: '6 nights / 7 days',
      start: new Date('2021-05-01T08:00:00Z'),
      resort: 'Barrier Island Resort, 5 stars',
      perPerson: 3499.00,
      image: 'reef3.jpg',
      description: "The great barrier reef awaits!"
    }
  ];

  // Apply filters dynamically
  get filteredTrips(): Trip[] {
    return this.trips.filter(trip => {
      const matchesSearch = this.searchTerm === '' || 
        trip.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        trip.resort.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesPrice = this.maxPrice == null || 
        (trip.perPerson) <= this.maxPrice;

      return matchesSearch && matchesPrice;
    });
  }
}
