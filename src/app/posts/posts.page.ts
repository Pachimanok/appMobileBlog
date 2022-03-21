import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  providers:[DataService],

})
export class PostsPage implements OnInit {

  datos = [];
  constructor(private DataSvc: DataService) { }


  ngOnInit() {
    
      this.DataSvc.getAll()
        .subscribe( res =>  {
          console.log(res);
          this.datos = res;
    })
  }
}

