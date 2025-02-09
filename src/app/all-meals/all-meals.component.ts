import { Component } from '@angular/core';
import { MealServiceService } from '../meal-service.service';
import { FlwbiteService } from '../flwbite.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-meals',
  imports: [FormsModule],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss',
})
export class AllMealsComponent {
  mealList!: any[];
  categoryList!: any[];
  selectedOption: string = '';

  constructor(
    private FlowbiteService: FlwbiteService,
    private mealServiceService: MealServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {});

    this.mealServiceService.allMeals().subscribe({
      next: (res) => {
        this.mealList = res.meals;
      },
    });

    this.mealServiceService.getCategories().subscribe({
      next: (res) => {
        this.categoryList = res.categories;
      },
    });
  }

  getSpecifcmeals(meal: string): void {
    this.mealServiceService.getMeals(meal).subscribe({
      next: (res) => {
        this.mealList = res.meals;
      },
    });
  }

  onOptionChange() {
    this.mealServiceService.getMeals(this.selectedOption).subscribe({
      next: (res) => {
        console.log(res);
        this.mealList = res.meals;
      },
    });
  }

  goToIngredientsPage(mealIdNumber: string) {
    this.router.navigate(['/Ingredients'], { state: { mealId: mealIdNumber } });
  }

  getALLmeals() {
    this.mealServiceService.allMeals().subscribe({
      next: (res) => {
        this.mealList = res.meals;
      },
    });
  }
}
