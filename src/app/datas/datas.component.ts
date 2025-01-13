import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrl: './datas.component.css'
})

export class DatasComponent implements OnInit {
datas:any=[]
newData = {name:'',value:0,category:'',timestamp:0}
editdatas = { id:null, name:'',value:0,category:'',timestamp:0}
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
createProduct(): void {
  this.base.create(this.newData).subscribe({
    next: (response) => {
      alert('Adat hozzáadva')
      this.newData = {name:'',value:0,category:'',timestamp:0}
      this.LoadDatas()
    },
    error: (error) => {
      console.error('Hiba történt:', error)
      alert('Nem sikerült a hozzáadás')
    },
    complete: () => {
      console.log('Hozzáadás kész')
    }
  });
}

updateData(): void {
  if (this.editdatas.id !== null) {
    this.base.update(this.editdatas.id, this.editdatas).subscribe({
      next: (response) => {
        alert('Adat frissítve!')
        this.LoadDatas()
      },
      error: (error) => {
        console.error('Hiba történt:', error)
        alert('Nem sikerült a frissítés.')
      },
      complete: () => {
        console.log('Frissítés kész.')
      }
    });
  } else {
    alert('Hibás ID.');
  }
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
deleteData(id: number): void {
  if (id !== null && id !== undefined) {
    this.base.delete(id).subscribe({
      next: (response) => {
        alert('Adat törölve')
        this.LoadDatas()
      },
      error: (error) => {
        console.error('Hiba történt:', error)
        alert('Nem sikerült a törlés.')
      },
      complete: () => {
        console.log('Delete megvot')
      }
    })
  } else {
    alert('Hiba: nincs id')
  }
}


}
