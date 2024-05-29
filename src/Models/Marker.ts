export class Marker{
    position!:{lat:number,lng:number};
    label!:{color:string,text:string};
    title!:string;
    info!:string;
    options!:any;
    id!:number;
}

// addMarker() {
//     this.markers.push({
//       position: {
//         lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
//         lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
//       },
//       label: {
//         color: 'red',
//         text: 'Marker label ' + (this.markers.length + 1),
//       },
//       title: 'Marker title ' + (this.markers.length + 1),
//       info: 'Marker info ' + (this.markers.length + 1),
//       options: {
//         animation: google.maps.Animation.BOUNCE,
//       },
//     });
//   }