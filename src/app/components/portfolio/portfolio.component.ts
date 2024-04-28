import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/enums/Projeto';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  modalRef?: BsModalRef | null;
  selectedProjeto?: Projeto | null;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, projeto: Projeto) {
    this.selectedProjeto = projeto;
    this.modalRef = this.modalService.show(template, { class: 'modal-xl modal-dialog-centered' });
  }


  closeModal() {
    this.modalRef?.hide();
    this.selectedProjeto = null;
  }

  projetos: Projeto[] = [
    {
      id: 1,
      image: 'assets/img/chale.png',
      title: 'Chalé Hotel',
      date: '07 novembro 2021',
      details: 'Ver mais',
      description: `Site de um hotel fictício, com um design moderno e 
      responsivo, feito com HTML, CSS e JavaScript. lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
       pulvinar dapibus leo.Site de um hotel fictício, com um design moderno e 
       responsivo, feito com HTML, CSS e JavaScript. lorem ipsum dolor sit amet,
       consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
       pulvinar dapibus leo.Site de um hotel fictício, com um design moderno e 
       responsivo, feito com HTML, CSS e JavaScript.`,
      link: 'de5aqh',
    },
    {
      id: 2,
      image: 'assets/img/tela_2.png',
      title: 'Sistema SGB',
      date: '12 junho 2023',
      details: 'Ver mais',
      description: `SGB - Sistema de gerenciamento de bancas, com um design moderno e 
      responsivo, feito com HTML, CSS e JavaScript. lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
       pulvinar dapibus leo.Site de um hotel fictício, com um design moderno e 
       responsivo, feito com HTML, CSS e JavaScript. lorem ipsum dolor sit amet,
       consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
       pulvinar dapibus leo.Site de um hotel fictício, com um design moderno e 
       responsivo, feito com HTML, CSS e JavaScript. lorem ipsum dolor sit amet,
       consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
       pulvinar dapibus leo.`,
      link: '9s5qbp',
    },
  ];



  ngOnInit(): void {

  }

}
