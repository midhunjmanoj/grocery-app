import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];
  constructor(private dataService: DataService,  private router: Router) {
    this.dataService.getCatergory().subscribe((response: any)=>{
        this.categories = response.data;
      }
      )
    
   }

  ngOnInit(): void {
  }
  onClickHandler(category: any){
    this.router.navigate(['products/'+category]);
  }

}
