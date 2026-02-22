// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 




//  - HH:MM::SS (Eg. 13:45:23)   [Format : 1]
function currentMachineTime(){
    let time = new Date();

    let hour = String(time.getHours()).padStart(2,'0')
    let minutes = String(time.getMinutes()).padStart(2,'0')
    let seconds = String(time.getSeconds()).padStart(2,'0')

    console.log(`${hour}:${minutes}:${seconds}`);
}
setInterval(() => {
    currentMachineTime();
}, 1000);


//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)   [Format : 2]

function currentMachineTimeNew(){
    let now = new Date();

    let HH= String(now.getHours()).padStart(2,'0')
    let MM = String(now.getMinutes()).padStart(2,'0')
    let SS = String(now.getSeconds()).padStart(2,'0')

    const timeFormat = HH>=12 ? 'PM':'AM';
    HH = HH % 12;
    HH = HH == 0 ? 12 : HH;

    HH = String(HH).padStart(2,'0');

    console.log(`${HH}:${MM}:${SS} ${timeFormat}`);
}
setInterval(() => {
    currentMachineTimeNew();
}, 1000);
