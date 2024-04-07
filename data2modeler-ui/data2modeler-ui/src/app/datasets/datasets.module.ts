import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetUploadComponent } from './dataset-upload/dataset-upload.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes =[
  {path:'', component:DatasetUploadComponent}
  
];

@NgModule({
  declarations: [DatasetUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
  
})
export class DatasetsModule { }
