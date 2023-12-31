import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent implements OnInit {

  apiKey = environment.API_PUBLIC_KEY;

  constructor(private fb: FormBuilder) { }

  contatoForm = this.fb.group({
    from_name:'',
    to_name:'Cristiano',
    from_email:'',
    subject:'',
    message:'',
  });

 async sendEmail() {
    emailjs.init(this.apiKey);
    let response = await emailjs.send("service_la3ltpo", "template_gw1zj4i", {
      from_name: this.contatoForm.value.from_name,
      to_name: this.contatoForm.value.to_name,
      from_email: this.contatoForm.value.from_email,
      subject: this.contatoForm.value.subject,
      message: this.contatoForm.value.message,
    });
    alert('Email enviado com sucesso!');
    this.contatoForm.reset();
  }


  ngOnInit(): void {
  }
}
