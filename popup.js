const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

const exercises = ["High Knees", "Mountain Climbers", "Push-ups", "Jumping Jacks", "Squats", "Pull-ups", "Burpees", "Lunges", "Jump Squats", "Jump Lunges", "Calf Raises", "Flutter Kicks", "Bicycles", "Wall Sits", "Plank"];
const phrase = "It's that time again! get down and give me one minute of ";
function time(){
    var today = new Date();
    return today.getHours() + ":" + today.getMinutes()
}


//https://loading.io/progress/



function getExercise(){
    var ex = exercises[Math.floor(Math.random()*exercises.length)];
    var newphrase = phrase + ex;
    document.getElementById('main').innerHTML = newphrase;
    
}




    var now = new Date();
    var hr = now.getHours();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hr, 50, 0, 0) - now;
    if (millisTill10 < 0) {
         millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
    }
    setTimeout(function(){
        alert("Sarge says, Time to get up and move! " + hr + ":50");
        
    }, millisTill10);



