import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-create-visitantes',
  templateUrl: './create-visitantes.component.html',
  styleUrls: ['./create-visitantes.component.css']
})
export class CreateVisitantesComponent implements OnInit {
  createVisitante:FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb:FormBuilder, 
              private _visitanteService: VisitanteService,
              private router: Router,
              private toastr: ToastrService) { 
    this.createVisitante = this.fb.group({
      identificacion:['', Validators.required],
      nombreUno:['', Validators.required],     
      nombreDos:[''], 
      apellidoUno:['', Validators.required],
      apellidoDos:[''], 
      unidad:['', Validators.required],
      contacto:[''], 
      eps:[''], 
      arl:[''], 
      motivo:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarVisitante(){
    this.submitted = true;
    if(this.createVisitante.invalid){
      this.toastr.warning('Identificación,Primer Nombre,Primer Apellido,Unidad y Motivo son obligatorios','Campos Requeridos', {
        positionClass: 'toast-bottom-center'
      });
      return;
    }

    const visitante : any = {
      identificacion: this.createVisitante.value.identificacion,
      nombreUno: this.createVisitante.value.nombreUno,
      nombreDos: this.createVisitante.value.nombreDos,
      apellidoUno: this.createVisitante.value.apellidoUno,
      apellidoDos: this.createVisitante.value.apellidoDos,
      unidad: this.createVisitante.value.unidad,
      contacto: this.createVisitante.value.contacto,
      eps: this.createVisitante.value.eps,
      arl: this.createVisitante.value.arl,
      motivo: this.createVisitante.value.motivo,
      fechaCreacion:  new Date(),
      fechaActualizacion : new Date()
    }

    this.loading = true;

    this._visitanteService.agregarVisitante(visitante).then(()=>{
      this.toastr.success('Visitante registrado con exito','Visitante Registrado')
      this.loading = false;
      this.router.navigate(['/dashboard'])
    }).catch(error => {
      console.log(error)
      this.loading = false;
    })
    
  }



}
