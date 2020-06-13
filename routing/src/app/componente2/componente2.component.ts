import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router: ActivatedRoute, private routero: Router) { }

  ngOnInit(): void {

    this.router.params.subscribe(params => {

      if (params["id"] != null && params["titulo"] != null) {
        console.log('llego el parametro id ' + params["id"]+' llego el parametro titulo' + params["titulo"]);
      } else {
        if (params["id"] != null) {
          console.log('llego el parametro' + params["id"]);
        }
      }


    });


  }

}
