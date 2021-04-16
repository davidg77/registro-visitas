import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {
  
  constructor(private firestore : AngularFirestore) { }

  agregarVisitante(visitante: any): Promise<any>{
    return this.firestore.collection('visitantes').add(visitante);

  }

  getVisitantes(): Observable<any>{
    return this.firestore.collection('visitantes',ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  getVisitantesFecha(): Observable<any>{
    return this.firestore.collection('visitantes').get();    
  }

  formatDate(date: Date):string{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() ;
    return `${year}-${month}-${day}`;

  }
}
