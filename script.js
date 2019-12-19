let LetsGo = function () {

  name = document.getElementById("NameBox").value;
  document.getElementById("start").innerHTML = "Okay " + name + " are you READY?!" + '<p></p><form id="RadioButton"><input type="radio" name="yOrn" id="yes" onclick="conTinue()"><label for="yes">Yes</label><input type="radio"name="yOrn" id="no" onclick="conTinue()"><label for="no">No!</label></form>';

}

let conTinue = function () {

  if (yes.checked) {
    document.getElementById("output").innerHTML = '<input type="button" value="LETS GO!" onclick="FirstStep()">'
  } else {
    document.getElementById("output").innerHTML = "Too bad..." + '<input type="button" value="LETS GO!" onclick="FirstStep()">';
  }

}


let FirstStep = function () {

  document.getElementById("narrative").innerHTML = " ";
  document.getElementById("start").innerHTML = " ";
  document.getElementById("output").innerHTML = " ";
  document.getElementById("narrative2").innerHTML = name + ", you're a police officer, one day you go on a chase with your friend Shane. The guys you're chasing crashes and hops out of the car, only to start shooting at you. What do you do?<br><input type=radio name='choices' id='firstChoice1' onclick='shootBack()'><label for='firstChoice1'>Shoot back while taking cover</label><br><input type=radio name='choices' id='firstChoice2' onclick='callBackup()'><label for='firstChoice2'>Call for backup right away</label>"

}

let shootBack = function () {
  document.getElementById("narrative2").innerHTML = "While shooting back, you run out of ammo, and realize you've gotten shot in the shoulder. You didnt feel it becuase of your adrenaline pumping. The criminal is also shot, but youre bleeding out. You soon pass out while Shane is still shooting.<br><input type='button' value='Continue' onclick='shootBackk()'>"

}

let shootBackk = function () {
  document.getElementById("narrative2").innerHTML = "It is 4 years later, you wake up in a hospital bed out of a coma. The hospital you are in is abandoned at this point, and you hear noises in the hallway. Noises that may be zombies, growling noises. What do you do?<p></p><input type='radio' id='hospitalChoice' onclick='liveorDie()'><label for='hospitalChoice'>Stay in bed becuase you are scared and in pain...</label><br><input type='radio' id='hospitalChoice2' onclick='liveorDie()'><label for='hospitalChoice2'>Get out of bed to peek in the hallway.</label>"
}

let liveorDie = function () {
  let hospitalChoice0 = " ";

  if (hospitalChoice.checked) {
    let hospitalChoice0 = document.getElementById("narrative2").innerHTML = " You stayed in bed and the zombies got closer to your door. While you tried to get up and fight, you couldnt becuase of how weak you were. They got you, YOU DIED.<br><input type='button' value='TRY AGAIN' onclick='shootBackk()'>"
  } else if (hospitalChoice2.checked) {
    let hospitalChoice0 = document.getElementById("narrative2").innerHTML = "You peek into the hallway to see a locked door, down the hallway on your right. The door is almost breached by lousy zombies. On the left is another two doors that you can escape through. Which was will you go? <br><input type='radio' id='firstLeft' name='directions' onclick='leftorRight()'><label for='firstLeft'>Left</label><input type='radio' id='firstRight' name='directions' onclick='leftorRight()'><label for='firstRight'>Right</label>"

  }
}

let leftorRight = function () {
  if (firstRight.checked) {
    document.getElementById("narrative2").innerHTML = "It was kind of stupid of you to walk right into the door. The zombies breached it and ate you alive. YOU ARE NOW THE WALKING dead <br><input type='button' value='TRY AGAIN' onclick='shootBackk()'>"
  } else if (firstLeft.checked) {
    document.getElementById("narrative2").innerHTML = "Congratulations, you have made it out the hotspital. You look around and notice everything is abandoned and zombies are scattered around. Since you are an ex-cop, you have many survival skills.<br><input type='button' value='Head Home' onclick='weMadeit()'>"
  }

}

let weMadeit = function () {
  document.getElementById("narrative2").innerHTML = "You're home now, you attempted to make the walk home without being seen by any zombies. The house is empty, you call for your roomate, Tommy, but he doesn't answer. The house looks all clean, and drawers are empty. You know he is still alive.<p></p><input type='radio' name='gts' id='gts' onclick='finalDecision()'><label for='gts'>Barricade the house and go to sleep</label><br><input type='radio' name='gts' id='lEave' onclick='finalDecision()'><label for='lEave'>Clean yourself up, grab your weapons, and go find your family and friends.</label>";
  document.getElementById("beginning").innerHTML = " ";


}

let finalDecision = function () {
  if (gts.checked) {
    document.getElementById("narrative2").innerHTML = "You wake up in the middle of the night, you hear something fall in the other room and growling noises. You get out out of bed rapidly to see what it is while your pistol is in your hand. You see a zombie...<input type='button' value='SHOOT' id='shooT'onclick='shooT()'>"
  } else if (lEave.checked) {
    document.getElementById("narrative2").innerHTML = "You journeyed so long you found your crew. You survive the rest of the zombie take over. Congratulations.<br><img src='TWD.jpg' alt='The Walking Dead' width=80% ><br><input type='button' value='START OVER' onclick='FirstStep()'>" 
  }
}

let shooT = function () {
  document.getElementById("narrative2").innerHTML = "<form id='deadMan'>BOW! You shoot the gun. The zombies hear it, they're attracted to sound. As you're shooting more they break in. Ouch! You scream. You've been bitten in the back. You drop the gun, you're weak, they all attack you eatting your insides. Everything goes black. You " + name + " are now the WALKING DEAD.<br><img src='wasted.png' alt='wasted'></form><br><input type='button' value='start over' onclick='FirstStep()'> ";
}






let callBackup = function () {
  document.getElementById("narrative2").innerHTML = "You attempt to call for backup, however you don't have any type of service. While Shane was shooting you weren't paying attention. He is now dead and its two crimnals vs one cop. They nearly beat you to death and capture you. You blackout..<br><input type='button' value='Continue' onclick='blackOut()'>";
}

let blackOut = function(){
  document.getElementById("narrative2").innerHTML = "It is a week later, you're tied to a chair. You're in an empty warehouse. You hear growling noises everywhere.<input type='button' value='BREAK OUT THE CHAIR' onclick='breakOut()'>"
}

let breakOut = function(){
  document.getElementById("narrative2").innerHTML = "You then walk outside. There are zombies everywhere, just roaming. These zombies aren't the fast type, but noise attracts them. What will you do?<br><input type='radio' name='walk' id='goOutside' onclick='weMadeit()'><label for='goOutside'>Go outside, and try to sneak home without being seen</label><br><input type='radio' name='searchBuilding' id='searchBuilding' onclick='nope()'><label for='searchBuilding'>Search the building for any weapons</label>"
}

let nope = function(){
  document.getElementById("narrative2").innerHTML = "You find nothing...<br><input type='button' value='GO Back' onclick='breakOut()'>" 

}