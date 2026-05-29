import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
    searchText : string = 'Java Fullstack';
    updateSearch(event :any){
      this.searchText = event.target.value
    }

}
