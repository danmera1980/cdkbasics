import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      car: ['ford', Validators.required]
    })
  }

  public disableAll(): void{
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control?.disable();
    });
  }

  public save(form: FormGroup): void {
    console.log(form);
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      control?.markAsDirty();
    })
  }

}
