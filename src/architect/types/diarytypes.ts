

export type measureSystem = 'metric' | 'imperial' | 'kg'

export interface WeightInterface {
    weight: number,
    system: measureSystem
}

export interface ShortDiaryRecord {
    id: string,
    date: string;
    content: string;
    title: string
}

export interface measureInterface {
    "Weight": WeightInterface;
    "Blood Pressure": string;
    "Heart Rate": number;
    "Sleep Duration": number;
    "Steps": number;
    "Calories Burned": number;
} 

export interface habitInformation {
    waterIntake: number;
    medicationTaken: boolean;
}

export interface HealthDiaryRecord extends ShortDiaryRecord {
    measureInformation: measureInterface
    habitInformation: habitInformation
    mood: number;
    
  }


  