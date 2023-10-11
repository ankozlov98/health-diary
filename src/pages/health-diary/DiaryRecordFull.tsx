import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { HealthDiaryRecord } from '../../architect/types/diarytypes';

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
  

const list = [
    {
      id: '111',
      date: getCurrentUTCDate().toDateString(),
      title: shortenString("Lorem ipsum dolor sit amet", 60),
      content: shortenString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tortor, efficitur non tortor et, rhoncus rhoncus lacus. Fusce ac sodales sem, ac venenatis lacus. Integer fermentum feugiat pretium. Donec dapibus enim ac est tincidunt dignissim. Cras at lacinia tortor. Nulla pulvinar urna vel.", 250)
    },
    {
      id: '222',
      date: getCurrentUTCDate().toDateString(),
      title: shortenString("Sed diam nonummy", 60) as string,
      content: shortenString("Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.", 250)
    },
    // Add more objects as needed
  ];

  
const DiaryRecordFull = () => {

    const [item, setItem] = useState<Partial<HealthDiaryRecord> | null>(null)
    const loc = useLocation()

    useEffect(() => {
        const probId = loc.pathname.split('/diary/')[1]
    let itemToInsert = list.find(i => i.id === probId)

    if (probId && itemToInsert) {
      setItem(itemToInsert as Partial<HealthDiaryRecord>)
    } else setItem(null)
    }, [loc])

  return (
    <div>{item?.content}</div>
  )
}

export default DiaryRecordFull