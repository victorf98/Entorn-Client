import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../Model/Entitats/Implementations/Criteri/Criteri';
import { Rubrica } from '../../Model/Entitats/Implementations/Rubrica/Rubrica';
import { Valoracio } from '../../Model/Entitats/Implementations/Valoracio/Valoracio';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  criteriForm!: FormGroup;
  criteri!: Criteri;
  rubrica: Rubrica = new Rubrica();
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.criteri = new Criteri();
    if (localStorage.getItem("rubrica") == null || localStorage.getItem("rubrica") == "") {
      localStorage.setItem("rubrica", "");
    } else {
      this.rubrica = JSON.parse(localStorage.getItem("rubrica") || "");
    }
    this.criteriForm = this.fb.group({
      nom_criteri: ["",
        {
          validators: [
            Validators.required
          ]
        }
      ],
      valoracio: this.fb.group({
        descripcio: ["",
          {
            validators: [
              Validators.required
            ]
          }
        ],
        valor: ["",
          {
            validators: [
              Validators.required
            ]
          }
        ]
      }
      )
    })
  }

  afegirValoracio() {
    if (this.criteri.nom == null) {
      this.criteri.setNomiBlocarCamp(this.criteriForm.get("nom_criteri")?.value);
    }
    let valoracio = this.criteriForm.get("valoracio")?.value;
    valoracio.seleccionat = false;
    this.criteri.setValoracio(valoracio);
    this.reiniciarCampsValoracio();
  }

  registrar() {
    this.guardarRubrica();
    this.criteri.desblocarCampCriteri();
    this.ngOnInit();
  }

  netejar() {
    localStorage.clear();
    location.reload();
  }

  criteriNoGuardat() {
    return this.criteri.nom == null;
  }

  reiniciarCampsValoracio() {
    this.criteriForm.setValue({ nom_criteri: this.criteri.nom, valoracio: { descripcio: "", valor: "" } });
  }

  guardarRubrica() {
    this.rubrica.criteris.push(this.criteri);
    localStorage.setItem("rubrica", JSON.stringify(this.rubrica));
  }

  cancelarCriteri(){
    this.criteri.desblocarCampCriteri();
    this.ngOnInit();
  }
}
