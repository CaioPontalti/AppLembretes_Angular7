import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from '../../services/lembrete.service';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  
  public lembretes: Lembrete[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent; 

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    this.getListaLembres()
  }

  getListaLembres(){
    this.lembreteService.getLembretes()
        .subscribe( (lembreteParan: Lembrete[]) => { this.lembretes = lembreteParan ;}  , 
        // Se a requisição der certo executa a de cima, se der erro chama o de baixo. 
                    () => { this.errorMsgComponent.setError('Falha ao buscar Lembretes!');}
                  );
  }
  
  getDeletaLembrete(id: number){
    this.lembreteService.deleteLembrete(id)
                        .subscribe( () => { this.getListaLembres() ;},
        //Se der certo deleta o lembrete e lista novamente os lembretes, se der erro chama o de abaixo
                                    () => { this.errorMsgComponent.setError('Erro ao deletar o lembrete!');}
                                  );
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
