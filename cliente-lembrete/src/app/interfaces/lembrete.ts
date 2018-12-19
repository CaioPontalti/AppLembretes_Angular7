type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA'

export interface Lembrete {
    Id: number,
    Autor: string,
    Conteudo: string,
    Prioridade: prioridade,
    Modificado: number
}
