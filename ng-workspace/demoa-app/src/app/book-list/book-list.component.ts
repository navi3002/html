import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 title = 'Financial Books';
 currentTab=1;
books: Array<any> = [
   {
     name: 'The Three Zeros',
     prices: 270,
     author: 'Muhammed Yunus',
     canBuy: true,
     images: [
       {thumb: 'images/WorldofThreeZeros.png', full: ''}
     ],
   
   },
   {
    name: 'Zero to One',
    prices: 320,
    author: 'Peter Theil',
    canBuy: true,
    images: [{thumb : 'images/ZeroToOne.png', full: ''}]
    
  },

 ]
  constructor() { }

  ngOnInit(): void {
  }
  onbuy(book:any){
    console.log('book added to the cart...'+book.name+''+book.price);
  }
    isTabSelected(tabIndex: number){
      return this.currentTab == tabIndex;
    }
    onTabChange(event: any, tabIndex: number){
      event.preventDefault(); // To stop flicker
      this.currentTab = tabIndex;
      console.log('Tab Selected: '+this.currentTab);
    }
  
}
