import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Projeto } from 'src/app/enums/Projeto';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  modalRef?: BsModalRef | null;
  selectedProjeto?: Projeto | null;
  safeUrl?: SafeResourceUrl;

  constructor(
    private modalService: BsModalService,
    private sanitizer: DomSanitizer
  ) { }

  openModal(template: TemplateRef<any>, projeto: Projeto) {
    this.selectedProjeto = projeto;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(projeto.link);
    this.modalRef = this.modalService.show(template, { class: 'modal-xl modal-dialog-centered' });
  }


  closeModal() {
    this.modalRef?.hide();
    this.selectedProjeto = null;
  }

  projetos: Projeto[] = [
    {
      id: 1,
      image: 'assets/img/chale.jpg',
      title: 'Chalé Hotel',
      date: '07 novembro 2021',
      details: 'Ver mais',
      description: `O projeto do site do Chalé Hotel representa um marco 
      significativo em meu aprendizado de desenvolvimento web, destacando 
      meus conhecimentos em HTML e CSS. A estrutura semântica e organizada 
      do HTML permitiu a apresentação clara dos serviços do hotel, enquanto
      o CSS trouxe vida ao design. A escolha cuidadosa de cores, 
      fontes e layouts criou uma experiência visualmente atraente e funcional.`,
      link: 'https://streamable.com/e/de5aqh?autoplay=1&muted=1',
      link_repo: 'https://github.com/ccrismota/site-chale',
      link_proj: 'https://ccrismota.github.io/site-chale/',
    },
    {
      id: 2,
      image: 'assets/img/sgb.jpg',
      title: 'Sistema SGB',
      date: '12 junho 2023',
      details: 'Ver mais',
      description: `Inicialmente, o Sistema de Gerenciamento de Bancas (SGB)
      passou por um minucioso levantamento de requisitos, com o objetivo de 
      automatizar o cadastro de alunos, professores e trabalhos, visando eliminar
       processos manuais e reduzir potenciais erros. O sistema foi projetado 
       adotando uma arquitetura baseada em micro serviços, sustentada por 
       tecnologias modernas, tais como Node, React, Auth0 e PostgreSQL, 
       evidenciando, assim, uma abordagem técnica robusta. Como decisão 
       estratégica, optou-se por priorizar funcionalidades cruciais, 
       concentrando esforços na automação do cadastro e agendamento de bancas.      `,
      link: 'https://streamable.com/e/9s5qbp?autoplay=1&muted=1',
      link_repo: 'https://github.com/ccrismota/portifolio',
      link_proj: 'https://por7folio.netlify.app',
    },

  ];



  ngOnInit(): void {

  }
}
