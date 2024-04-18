import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.sass']
})

export class CurriculoComponent implements OnInit {

 
  timeLineHeader: any[] = [];
  timeLineBody: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }
}
