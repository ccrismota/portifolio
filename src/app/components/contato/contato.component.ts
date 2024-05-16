import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    from_name:  ['', [Validators.required, Validators.minLength(4)]],
    to_name:['Cristiano',[Validators.required, Validators.minLength(7)]],
    from_email:['', [Validators.required, Validators.email]],
    subject:['', [Validators.required]],
    message:['', [Validators.required]],
  });

  get from_name(){
    return this.contatoForm.get('from_name');
  }

  get to_name(){
    return this.contatoForm.get('to_name');
  }

  get from_email(){
    return this.contatoForm.get('from_email');
  }

  get subject(){
    return this.contatoForm.get('subject');
  }

  get message(){
    return this.contatoForm.get('message');
  }
  

  
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
