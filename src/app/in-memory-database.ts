import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Category} from './pages/categories/shared/category.model';

export class inMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories:Category[] = [
      {id:1, name:'Moradia', description:'Pagamentos de contas de Casa'},
      {id:2, name:'Saúde', description:'Plano de saude e Remedios'},
      {id:3, name:'Lazer', description:'Cinema, paques, praias, etc'},
      {id:4, name:'Salário', description:'Recebimento de Salario'},
      {id:5, name:'Freelas', description:'Trabalhos com freelancer'},
    ];
    return { categories }
  }
}
