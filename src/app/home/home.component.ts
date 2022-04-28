import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: any;
  term_of_condition: any;
  radio_selected: any;
  constructor(private readonly home_service: HomeService) {}

  ngOnInit(): void {
    this.home_service.getCategories().then((data: any) => {
      this.categories = data;
    });
  }

  addEmployee(name: any) {
    try {
      console.log(name);
      this.home_service.addEmployee({
        name: name,
        category: this.radio_selected,
        term: this.term_of_condition,
      });
    } catch (error) {
      throw new Error('Error when adding employee ' + error);
    }
  }

  term(event: any) {
    try {
      console.log(event.target.checked);
      this.term_of_condition = event.target.checked;
    } catch (error) {
      throw new Error('Error on terms Event');
    }
  }

  category(cat: any) {
    try {
      this.radio_selected = cat.target.value;
    } catch (error) {
      throw new Error('Error on category Event');
    }
  }
}
