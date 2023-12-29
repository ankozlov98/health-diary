import { configure, makeAutoObservable } from "mobx"
import { HealthDiaryRecord } from "../../types/diarytypes";

configure({ enforceActions: 'observed' })

// Get current date in UTC format
function getCurrentUTCDate() {
    const date = new Date();
    return new Date(Date.UTC(date.getUTCFullYear(),
      date.getUTCMonth(), date.getUTCDate(),
      date.getUTCHours(), date.getUTCMinutes(),
      date.getUTCSeconds(), date.getUTCMilliseconds()));
  }
  
  // Shorten string to desired length
  function shortenString(str: String, maxLength: number) {
    return str.length > maxLength ? `${str.slice(0, maxLength - 3)}...` : str;
  }
  

const list: Array<Partial<HealthDiaryRecord> | null> = [
    {
      id: '111',
      date: getCurrentUTCDate().toDateString(),
      title: shortenString("Lorem ipsum dolor sit amet", 60) as string,
      content: shortenString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tortor, efficitur non tortor et, rhoncus rhoncus lacus. Fusce ac sodales sem, ac venenatis lacus. Integer fermentum feugiat pretium. Donec dapibus enim ac est tincidunt dignissim. Cras at lacinia tortor. Nulla pulvinar urna vel.", 250) as string,
      mark: 3
    },
    {
      id: '222',
      date: getCurrentUTCDate().toDateString(),
      title: shortenString("Sed diam nonummy", 60) as string,
      content: shortenString("Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.", 250) as string,
      measureInformation:  {
        "Weight": { weight: 150, system: "kg" },
        "Blood Pressure": "120/80",
        "Heart Rate": 70,
        "Sleep Duration": 8,
        "Steps": 10000,
        "Calories Burned": 500
    }
    },
    // Add more objects as needed
  ];



 class DiaryStore {

    diaryRecordsList: Array<Partial<HealthDiaryRecord> | null> = list
   
    

    showRecords = () => {
        return this.diaryRecordsList as Array<Partial<HealthDiaryRecord> | null> | null
    }

    addRecord = (payload: Partial<HealthDiaryRecord>) => {
      this.diaryRecordsList.push(payload)
    }

    deleteRecord = (payload: string) => {

      const recordIndex = this.diaryRecordsList.findIndex((item) => item?.id === payload);
      if (recordIndex > -1) {
        this.diaryRecordsList.splice(recordIndex, 1)
      }

      console.log('here')
      
    }

constructor() {
        makeAutoObservable(this)
        
    }
    



}
export default new DiaryStore()