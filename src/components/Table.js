import { useState } from "react";

const Table = () =>
{
    const PrayerObj = [
        {        
        name:'Fajr',
        prayed:false,
        Inmasjid:false,
        Bajamat:false,
        khusoo:0
    },
    {        
        name:'Zohar',
        prayed:false,
        Inmasjid:false,
        Bajamat:false,
        khusoo:0
    }
    ,
    {        
        name:'Asar',
        prayed:false,
        Inmasjid:false,
        Bajamat:false,
        khusoo:0
    }
    ,{        
        name:'Magrib',
        prayed:false,
        Inmasjid:false,
        Bajamat:false,
        khusoo:0
    }
    ,{        
        name:'Esha',
        prayed:false,
        Inmasjid:false,
        Bajamat:false,
        khusoo:0
    }

]

const handleCheckBoxChanged = (event,index,type) =>
{
    
    console.log(parseInt(event.target.value))
    const updatedPrayers = prayers.map((prayer,i)=>
    {
        if(i===index && type !=='khusoo')
        {
            return {...prayer,[type] :event.target.checked}
        }
        else if (i===index && type ==='khusoo')
        {

           return {...prayer,[type]:parseInt(event.target.value)}
        }
        return prayer
    })
    setprayers(updatedPrayers);
    console.log(prayers)
    

}

let [prayers,setprayers] = useState(PrayerObj);

    return (
        <>
        <table>
            <thead>

             <th>Prayers</th>
             <th>Prayed</th>
             <th>In-Masjid</th>
             <th>Ba-Jamat</th>
             <th>khusoo</th>
            </thead>
            <tbody>
                { prayers.map((prayer,index)=>
                <tr>
                    <th>{prayer.name} </th>
                    <td>
                        <input type={"checkbox"} value={PrayerObj.prayed} name="prayed" onChange={(event)=>handleCheckBoxChanged(event,index,'prayed')}/>
                    </td>
                    <td>
                    <input type={"checkbox"} value={PrayerObj.InMasjid} name="In-Masjid" onChange={(event)=>handleCheckBoxChanged(event,index,'InMasjid')}/>
                    </td>
                    <td>
                    <input type={"checkbox"} value={PrayerObj.Bajamat} name="Bajamat"onChange={(event)=>handleCheckBoxChanged(event,index,'Bajamat')}/>
                    </td>
                    <td>
                        <input type="number" value={PrayerObj.khusoo} name="khusoo"   min="0" max="5" onChange={(event)=>handleCheckBoxChanged(event,index,'khusoo')}/>
                    </td>
                </tr>)
}
            </tbody>
        </table>
        </>
    )

}

export default Table;