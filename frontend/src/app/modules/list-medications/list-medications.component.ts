import { Component, OnInit } from '@angular/core';
import { Medications } from '../..//interfaces/medications';
import { MedicationsService } from '../../services/medications.service';

declare var $:any;
//import * as $ from 'jquery';

@Component({
  selector: 'app-list-medications',
  templateUrl: './list-medications.component.html',
  styleUrls: ['./list-medications.component.css']
})
export class ListMedicationsComponent implements OnInit {
  medications:Medications[] = [];
  searchCategory:any;
  searchName:any;
  p:any = 1;
  showAddMedication:boolean = false;
  
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizesArr = [5, 10, 20, 30, 50];

  constructor(public ms: MedicationsService) { }

  ngOnInit(): void {
    this.allMedications();
  }
  allMedications(){
    this.ms.getMedications().subscribe((response)=>{
      this.medications = response;
      console.log(this.medications);
     })
  }
  searchByCategory(){
    if(this.searchCategory == ""){
      this.allMedications();
    }else{
      this.medications = this.medications.filter(res => {
        return res.category.toLocaleLowerCase().match(this.searchCategory)
      })
    }
  }
  searchByName(){
    if(this.searchName == ""){
      this.allMedications();
    }else{
      this.medications = this.medications.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchName)
      })
    }
  }
  showMe(){
    this.showAddMedication = true;
  }
 key:string = 'id';
 reverse:boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse
  }
  tabSize(event:any){
    this.page = event;
    this.allMedications();
  }
  tableData(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.allMedications();
  }  

}
