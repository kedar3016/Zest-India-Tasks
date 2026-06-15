import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
    searchText : string = '';

    @Output()
    searchTextChanged :EventEmitter<string> = new EventEmitter<string>();

    onSearchTextChanged(){
      this.searchTextChanged.emit(this.searchText);

    }
    updateSearch(event :any){
      this.searchText = event.target.value;
    }

}
