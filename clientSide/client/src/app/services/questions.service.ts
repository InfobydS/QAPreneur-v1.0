import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { ques} from '../services/'
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/question.json");
  }
}
