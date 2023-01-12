import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { codiValid } from './Validator/Validator';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  incidenciaForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.incidenciaForm = this.fb.group({
      codi: ['2022-',
        {
          validators: [
            Validators.required,
            Validators.minLength(5),
            codiValid()
          ]
        }
      ],
      titol: new FormControl("",
        {
          validators: [
            Validators.required,
            Validators.maxLength(100)
          ]
        }),
      responsable: this.fb.group({
        rol: ["",
        Validators.required
      ],
        nom: [""]
      })
    })
  }
  onSubmit() {
    console.log(this.incidenciaForm.get("codi")?.value);
    console.log(this.incidenciaForm.get("titol")?.value);
    console.log(this.getControlResponsableRol()?.value);
  }

  getControlResponsableRol(): any {
    return this.incidenciaForm.get("responsable.rol");
  }

}
