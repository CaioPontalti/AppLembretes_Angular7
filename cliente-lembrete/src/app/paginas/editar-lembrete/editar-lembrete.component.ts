import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from '../../services/lembrete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from '../../interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {

  public lembrete: Lembrete;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  
  constructor(
      private lembreteService: LembreteService, 
      private activatedRoute: ActivatedRoute, 
      private router: Router) { 
        this.getLembrete(this.activatedRoute.snapshot.params.id)
        }

  getLembrete(id: number){
    this.lembreteService.getLembrete(id)
    .subscribe( (lembrete: Lembrete) => { this.lembrete = lembrete ;} , //Se der certo, retorna o lembrete  
                () => {this.errorMsgComponent.setError('Falha ao buscar o lembrete!');}//Se der erro retorna a msg
              ) 
  }

  putLembrete(lembrete: Lembrete){
    this.lembreteService.putLembrete(lembrete).subscribe(
      () => { this.router.navigateByUrl('/'); } , // Se deu certo retorna para pag inicial
      () => { this.errorMsgComponent.setError('Falha ao atualizar o lembrete!'); } //Se não, retorna o erro.
    );
  }


}
