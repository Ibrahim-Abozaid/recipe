import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealServiceService {
  constructor(private httpClient: HttpClient) {}

  getMeals(category: string): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
  }

  getMealsById(id: string): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }

  allMeals(): Observable<any> {
    return this.httpClient.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
  }
}
