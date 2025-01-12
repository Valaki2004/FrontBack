import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrl: './datas.component.css'
})

export class DatasComponent implements OnInit {
datas:any=[]
editdatas = { id:null, name:'',value:'',category:'',timestamp:''}
cols:any=[]


constructor(private base:BaseService){}

ngOnInit(): void {
  this.base.getDatas().subscribe((res:any)=>  {
    this.datas=res})
}
LoadDatas():void{
  this.base.getDatas().subscribe((res:any)=>  {
    this.datas=res
  })
}

patch(): void {
  if (this.editdatas.id !== null) {
    this.base.patch(this.editdatas.id, this.editdatas).subscribe({
      next: (response) => {
        alert('Frissítés kész')
        this.LoadDatas()
      },
    })
  } else {
    alert('Sikertelen frisstés')
  }
}
}
