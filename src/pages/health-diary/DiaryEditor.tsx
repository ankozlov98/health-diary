import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

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

interface DiaeryRecord {
  id: string;
  date: Date;
  title: string | String;
  content: string | String;
}
// Generate a list of objects
const list = [
  {
    id: '111',
    date: getCurrentUTCDate(),
    title: shortenString("Lorem ipsum dolor sit amet", 60),
    content: shortenString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem tortor, efficitur non tortor et, rhoncus rhoncus lacus. Fusce ac sodales sem, ac venenatis lacus. Integer fermentum feugiat pretium. Donec dapibus enim ac est tincidunt dignissim. Cras at lacinia tortor. Nulla pulvinar urna vel.", 250)
  },
  {
    id: '222',
    date: getCurrentUTCDate(),
    title: shortenString("Sed diam nonummy", 60),
    content: shortenString("Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.", 250)
  },
  // Add more objects as needed
];


const DiaryEditor = () => {

  const loc = useLocation()

  const [item, setItem] = useState<DiaeryRecord | null>(null)

  useEffect(() => {

    const probId = loc.pathname.split('/diary/')[1]
    let itemToInsert = list.find(i => i.id === probId)

    if (probId && itemToInsert) {
      setItem(itemToInsert)
    } else setItem(null)
    
  }, [loc])

  return (
    <div style={{height: '100%'}}>EDIT {item && item.content}</div>
  )
}

export default DiaryEditor