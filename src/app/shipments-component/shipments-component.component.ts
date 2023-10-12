import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_SHIPMENT } from '../graphql/graphql.queries';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'shipments-component',
  templateUrl: './shipments-component.component.html',
  styleUrls: ['./shipments-component.component.css']
})
export class ShipmentsComponentComponent {

  constructor(
    private apollo:Apollo, 
    private router:Router
  ) {}

  shipment: any = [];
  loading = true;
  error: any;
  show_info = false;
  show_form = true;
  shipment_data: any = [];

  searchForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
    document_type: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    document: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  get code() {
    return this.searchForm.get('code');
  }

  get document_type() {
    return this.searchForm.get('document_type');
  }

  get document() {
    return this.searchForm.get('document');
  }

  onSearchShipment(formValue: any) {
    $('.errors').empty();
    var code = formValue.code;
    var document = formValue.document;
    var document_type = formValue.document_type;
    if(!Number.isInteger(code) || !Number.isInteger(document) || Number.isInteger(document_type)) {
      let template = '<span class="badge text-bg-warning">Hay errores en el formulario, por favor verifique</span>';
      $('.errors').append(template);
    } else {
      this.apollo.watchQuery({
        query: GET_SHIPMENT,
        variables: {
          id: code
        }
      }).valueChanges.subscribe((result: any) => {
        
        this.shipment = result?.data?.shipment;
        this.loading = result.loading;
        this.error = result.error
        this.show_info = true;
        this.show_form = false;
        this.shipment_data.push(this.shipment);
      });
    }
  }

  refreshPage() {
    window.location.reload();
  }

  exitApp() {
    this.router.navigate(["/"]).then(result=>{window.location.href = 'http://www.google.com/';});
  }
}
