import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  mealData: any;
  items = Array(12).fill(0);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mealServiceService: MealServiceService
  ) {}

  ngOnInit() {
    const state = history.state;
    console.log(state.mealId);

    this.mealServiceService.getMealsById(state.mealId).subscribe({
      next: (res) => {
        this.mealData = res.meals[0];
      },
    });
  }
}
