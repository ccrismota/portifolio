import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.sass']
}) 

export class PortifolioComponent implements OnInit {


  modalRef?: BsModalRef | null;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-xl modal-dialog-centered' });
  }


  
  ngOnInit(): void {
   
  }

}
