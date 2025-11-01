import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from "@google/genai";

@Injectable()
export class LlmService {
    private ai: GoogleGenAI;
    constructor(){
        const ai = new GoogleGenAI({});
    }
    async generateContent() {
        const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: "Explain how AI works in a few words",
        });
        console.log(response.text);
        return response.text;
    }
}
