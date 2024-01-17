import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.sass']
})
export class PortifolioComponent implements OnInit {

  constructor() { }

 

  openModal() {
    const modal = document.getElementById('myModal');    
    if(modal != null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');    
    if(modal != null) {
      modal.style.display = 'none';
    }
  }



  ngOnInit(): void {
  }

}
