import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  subCategories:any[]=[]
  catId:any
  subId:any
  constructor(private dataService:DataService ,private activatedRoute:ActivatedRoute,private router:Router) {
    this.catId=this.activatedRoute.snapshot.paramMap.get('catId')
    this.subId=this.activatedRoute.snapshot.paramMap.get('subId')
    this.dataService.getSubCategories(this.catId,this.subId).subscribe((response:any)=>{
      this.subCategories=response.data;

    })
   }

  ngOnInit(): void {
  }

}
