import { Component, OnInit } from '@angular/core';
import { Medications } from '../..//interfaces/medications';
import { MedicationsService } from '../../services/medications.service';
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
  //parameters for pagination
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizesArr = [5, 10, 20, 30, 50];
  
  key:string = 'id';
  reverse:boolean = false;
  collect:[]=[];
  constructor(public ms: MedicationsService) { }

  ngOnInit(): void {
    this.allMedications();
  }
  //This gets all medications from the backend through API call
  allMedications(){
    this.ms.getMedications().subscribe((response)=>{
      this.medications = response;
      console.log(this.medications);
     })
  }

  //This function searches the medication by category
  searchByCategory(){
    if(this.searchCategory == ""){
      this.allMedications();
    }else{
      this.medications = this.medications.filter(res => {
        return res.category.toLocaleLowerCase().match(this.searchCategory)
      })
    }
  }
  
  //This function searches the medication by category
  searchByName(){
    if(this.searchName == ""){
      this.allMedications();
    }else{
      this.medications = this.medications.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchName)
      })
    }
  }
  //This function responds to order of medication records for each of column i.e. Ascending / Descending
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //This functions responds to the click of each pagination button
  tabSize(event:any){
    this.page = event;
    this.allMedications();
  }
  //This functions responds to the selection of number of records per page, then get all medications records
  tableData(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.allMedications();
  }  
}
