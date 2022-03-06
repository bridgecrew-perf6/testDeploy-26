import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  title = 'Angular signature example';
  @ViewChild(SignaturePad)
  signaturePad: any;
  IssignatureImg :boolean;
  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 1000,
    'canvasHeight': 300
  };
  signatureImg: any;
  constructor() { }

  ngOnInit(): void {
  }


  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.IssignatureImg = true
    this.signatureImg = base64Data;
    const byteString = base64Data.split(',')[1];
    console.log(byteString);
    const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
    console.log(mimeString);
  }

}
