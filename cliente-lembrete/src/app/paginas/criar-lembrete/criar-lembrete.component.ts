import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  postLembrete(lembrete: Lembrete){
    this.lembreteService.postLembrete(lembrete)
    .subscribe(
    // Se der certo, incluiu o lembrete e redireciona para pagina inicial.
        () => { this.router.navigateByUrl('/'); } , 
    //Se der erro, chama o metodo abaixo do componente ErrorMsgComponent
        () => { this.errorMsgComponent.setError('Erro ao adicionar lembrete!'); }
    );
  }
}
