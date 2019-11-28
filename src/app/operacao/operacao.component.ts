import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs' ;
import { OperacaoAPIService } from '../operacao-api.service';

@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  formOperacao: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: OperacaoAPIService) { }

  ngOnInit() {
    this.formOperacao = this.formBuilder.group ({
      num1: this.formBuilder.control('') 
     
    })
  }

  onProcessar() {

    let num :string = this.formOperacao.value.num1;
    this.service.quadrado(num)
                        .subscribe((data: string) => alert (data),
                        error => console.log(error));
  }

}
