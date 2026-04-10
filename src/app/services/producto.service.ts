import { Producto } from 'src/app/models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProductos():Observable<any> {
    return this.http.get(this.url);
  }
  eliminarProductos(id:string):Observable<any> {
    return this.http.delete(this.url+id);
  }

  guardarProducto(producto: Producto ):Observable<any>{
    return this.http.post(this.url, producto)
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarProducto (id: String, producto: Producto): Observable<any>{
    return this.http.put(this.url + id, producto)
  }

}
