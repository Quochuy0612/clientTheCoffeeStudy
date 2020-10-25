import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CategoryService} from '../../Service/Category.module';

@Component({
  selector: 'app-collections-menu',
  templateUrl: './collections-menu.component.html',
  styleUrls: ['./collections-menu.component.css'],
  providers: [CategoryService],
})
export class CollectionsMenuComponent implements OnInit {
 
  constructor( private cateService:CategoryService) {
    cateService.getCategory().subscribe(data => {
      console.log(data);
    });
   }

  ngOnInit(): void {
  }

}
