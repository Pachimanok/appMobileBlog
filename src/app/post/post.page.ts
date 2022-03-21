import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  providers:[DataService],
})
export class PostPage implements OnInit {

  postId: string;
  dato;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private DataSvc:DataService) { }

  ngOnInit() {
      this.postId  = this.activatedRoute.snapshot.paramMap.get('id')
      this.DataSvc.getOne(this.postId)
      .subscribe( res =>  {
        console.log(res);
        this.dato= res;
  })

      
    }
    
    
  }


