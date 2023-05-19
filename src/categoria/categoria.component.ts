import { Component, OnInit } from "@angular/core";


@Component({
    templateUrl: './categoria.component.html',
})

export class CategoriaComponent implements OnInit {


    nome: string;
    categorias: string[] = [];


    cadastraCategoria(): void {
        console.log(this.nome)
        this.categorias.push(this.nome)
        localStorage.setItem("Categorias", JSON.stringify(this.categorias));
    }


    removerCategoria(categoria: string, indice: number) {
        this.categorias.splice(indice, 1)
        localStorage.removeItem("Categorias");
        localStorage.setItem("Categorias", JSON.stringify(this.categorias));
        var listaTarefas = JSON.parse(localStorage.getItem("Tarefas"))
        for (let i = 0; i < listaTarefas.length; i++) {
            if (listaTarefas[i].categoria == categoria) {
                listaTarefas.splice(i, 1)

                console.log("dentro")
                localStorage.removeItem("Tarefas")
                localStorage.setItem("Tarefas", JSON.stringify(listaTarefas));
            }
        }
    }


    ngOnInit(): void {
        const categoriasInit = localStorage.getItem('Categorias');
        if (categoriasInit) {
            this.categorias = JSON.parse(categoriasInit);
        }
    }
}