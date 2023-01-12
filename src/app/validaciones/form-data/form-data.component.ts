import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {

  resultado!: string;
  constructor(private fb: FormBuilder){
  }

  formData  = this.fb.group({
    nombre:['',Validators.required],
    email:['',Validators.required],
   telefono:['',{validators:[Validators.required, Validators.pattern('[0-9]{9}')]}],
    asunto:['', Validators.required],
    mensaje:["",[
      Validators.required,
      Validators.maxLength(500)
    ]]
    })

    get nombre(){return this.formData.get('nombre');}
    get email(){return this.formData.get('email');}
    get telefono(){return this.formData.get('telefono');}
    get asunto(){return this.formData.get('asunto');}
    get mensaje(){return this.formData.get('mensaje');}

    datos = new Array;

    onSubmit(){
      if(!this.formData.valid){
        this.resultado ="Los datos no se cumplieron"
      }else{
        this.resultado= "Registro Exitoso"
      }
      this.datos.push({
        'Nombres': this.formData.get('nombre')?.value,
        'Email': this.formData.get('email')?.value,
        'Telefono': this.formData.get('telefono')?.value,
        'Asunto': this.formData.get('asunto')?.value,
        'Mensaje': this.formData.get('mensaje')?.value,
        
      })

      console.log(this.datos)
    }

    reset() {
      this.formData.reset();
    }
}
