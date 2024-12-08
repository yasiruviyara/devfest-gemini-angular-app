import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() { 
    this.genAI = new GoogleGenerativeAI('#');
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const results = await this.model.generateContent(prompt);
      const response = await results.response;
      console.log("Gemini Response", response);
      return response; // Return the response
    } catch (error) {
      console.error('Error generating response', error);
      return 'Error generating response';
    }
  }
}