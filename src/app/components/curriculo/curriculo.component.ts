import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.sass']
})

export class CurriculoComponent implements OnInit {

  // corSeparador = document.getElementsByClassName('.p-timeline-event-separator');

  timeLineHeader: any[] = [];
  timeLineBody: any[] = [];

  constructor() { }

  ngOnInit(): void {

    // this.timeLineHeader = [
    //   {
    //     typeIcon: "school",
    //     status: "Formação Acadêmica",
    //     iconColor: "#fdda6f",
    //     backgroundColor: "none",
    //     textColor: "#FFFFFF"
    //   },
    //   {
    //     typeIcon: "school",
    //     status: "Experiências Profissionais",
    //     iconColor: "#fdda6f",
    //     backgroundColor: "none",
    //     textColor: "#FFFFFF"
    //   },
    //   {
    //     typeIcon: "school",
    //     status: "Formação",
    //     iconColor: "#fdda6f",
    //     backgroundColor: "none",
    //     textColor: "#FFFFFF"
    //   },
    //   {
    //     typeIcon: "school",
    //     status: "Formação",
    //     iconColor: "#fdda6f",
    //     backgroundColor: "none",
    //     textColor: "#FFFFFF"
    //   }
    // ];

    // this.timeLineBody = [
    //   {
    //     status: "Formação Acadêmica",
    //     date: "15/10/2020 10:30",
    //     icon: PrimeIcons.CIRCLE_FILL,
    //     color: "#fdda6f",
    //     backgroundColor: "#ffffff",
    //     typeIcon: "school"

    //   },
    //   {
    //     status: "Processing",
    //     date: "15/10/2020 14:00",
    //     icon: PrimeIcons.COG,
    //     color: "#673AB7"
    //   },
    //   {
    //     status: "Shipped",
    //     date: "15/10/2020 16:15",
    //     icon: PrimeIcons.ENVELOPE,
    //     color: "#FF9800"
    //   },
    //   {
    //     status: "Delivered",
    //     date: "16/10/2020 10:00",
    //     icon: PrimeIcons.CHECK,
    //     color: "#607D8B"
    //   }
    // ];


  }
}
