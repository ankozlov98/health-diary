import React, { useContext } from 'react'
import { Edit, Info, Trash } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { DiaryPageModeContext } from './HealthDiary';

// Generate a random unique ID
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
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
  
  console.log(list);


const DiaryRecordsList = () => {

  const navigateTo = useNavigate()
  const { setDiaryPageMode } = useContext(DiaryPageModeContext)
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: 12}}>
        {list.map((item) => {
           return <div style={{padding: 16, boxSizing: 'border-box', border: '1px solid lightgray', display: 'flex', flexDirection: 'column',alignItems: 'flex-start', gap: 4, width: '90%', paddingBottom: 4}}>
                <div style={{textAlign: 'left'}}>{item.title}</div>
                <div style={{textAlign: 'left', fontSize: 12, fontStyle: 'italic'}}>{item.date.toISOString()}</div>
                <div style={{height: 2, width: '100%', backgroundColor: 'black', marginTop: 4,  marginBottom: 4}}></div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <div><Trash /></div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 16}}><Edit 
                      onClick={() => {
                        setDiaryPageMode('edit')
                         navigateTo(item.id)
                      }} 
                    /><Info onClick={() => {
                      setDiaryPageMode('single')
                       navigateTo(item.id)
                    }} /></div>
                </div>
            </div>
        })}
    </div>
  )
}

export default DiaryRecordsList