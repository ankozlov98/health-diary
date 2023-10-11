

export type measureSystem = 'metric' | 'imperial'

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


export interface HealthDiaryRecord extends ShortDiaryRecord {
    weight: WeightInterface;
    bloodPressure: string;
    heartRate: number;
    sleepDuration: number;
    steps: number;
    caloriesBurned: number;
    waterIntake: number;
    medicationTaken: boolean;
    mood: number;
    
  }


  