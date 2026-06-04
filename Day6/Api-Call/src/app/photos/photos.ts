import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photos',
  imports: [FormsModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit{
  photoList:any[] = [];

  http = inject(HttpClient);

  newPhoto:any = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  ngOnInit(): void {
      this.getAllPhotos()
  }
  getAllPhotos() {
      this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((result:any)=>{
          this.photoList = result;
      })
  }
  onSaveButton(){
    
    this.http.post("https://jsonplaceholder.typicode.com/photos",this.newPhoto).subscribe((response:any) =>{
      alert("API CALL Success")
      this.getAllPhotos();
      
    })
  }
  onEdit(data:any){
    this.newPhoto = data;
  }
  onUpdateButton(){
    
    this.http.put("https://jsonplaceholder.typicode.com/photos/"+this.newPhoto.id,this.newPhoto).subscribe((response:any) =>{
      alert("API CALL Success")
      this.getAllPhotos();
      
    })
  }
}
