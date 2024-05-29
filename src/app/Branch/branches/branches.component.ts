import { BrandItemComponent } from './../../Brand/brand-item/brand-item.component';
import { BranchService } from './../../Services/Branch/branch.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Branch } from '../../../Models/Branch';
import { Marker } from '../../../Models/Marker';
import {  ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import AOS from 'aos';
 
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent implements OnInit{
  
  @ViewChild("markerElem") _MapMarker!: MapMarker;
  //@ViewChild("branchMark") _branchMark!: ElementRef;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild("h1") _header!: ElementRef;

  openInfo(e:any) {  
    console.log(e.target)
  }
    zoom = 0;
    center!: google.maps.LatLngLiteral;
    options: google.maps.MapOptions = {
      mapTypeId: 'hybrid',
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8  };
    markers:Marker[] = [];
    Branches:Branch[]=[];
  constructor(private _BranchService:BranchService){}
   
GetAllBranches(){
  this._BranchService.GetAllBranch().subscribe(res=>{
    this.Branches=res;
    console.log(this.Branches);
    for(let i=0;i<this.Branches.length;i++ ){
    this.addMarker(this.Branches[i]) 
    }
  },err=>{console.log(err)})
} 

addMarker(_Branch:Branch) {
    this.markers.push({
      position: {
        lat: _Branch.lat,
        lng: _Branch.lng,
      },
      label: {
        color: 'white',
        text: " ",
      },
      title: _Branch.location,
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },id:_Branch.id
    });
  }


  ngOnInit(): void { 
    this.GetAllBranches();
    AOS.init();
    // navigator.geolocation.getCurrentPosition((position) => {
    // this.center = {
    //   lat: position.coords.latitude-.78 ,
    //   lng: position.coords.longitude-.35,
    // };
    // });  
    // console.log(this.markers.length);
  }
}