let username;
const inputBox = document.getElementById("yourtext");
const agebox = document.getElementById("yourage");

// Safely removes it from the page layout on load, but keeps it in memory
agebox.remove(); 

document.getElementById("submit").onclick = function(){
  username = document.getElementById("yourtext").value;
  document.getElementById("yourh1").textContent = `Much better, ${username}`;
  document.getElementById("yourh2").textContent = 'Now those buttons down there choose the back ground of this whole thing btw! If you want it white then leave it ig, oh wait, your stuck here LOL! Now CHOOSE A COLOR!! please :]';
  document.getElementById("yourp").textContent = '';

}

const button = document.getElementById('yellowbg');
button.addEventListener('click', () => {
  document.body.classList.toggle('new-background-y');
  document.getElementById("yourh1").textContent = `Oh yeah, btw ${username}, I made it so you can only pick YELLOW to proceed.`;
  document.getElementById("yourh2").textContent = 'Sorry, maybe you can add your age now?? :c This is YOUR website after all. BTW this time press ENTER to continue';
  document.getElementById("yourp").textContent = 'Once again, I have no idea what you put in ever unless you tell me irl or smth! Don be scared lol TvT';
  document.getElementById("label").textContent = 'Age:';
  
  inputBox.parentNode.insertBefore(agebox, inputBox);
  inputBox.remove();

  // HEAR THE ENTER KEY PRESS:
  agebox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const age = agebox.value;
      document.getElementById("yourh1").textContent = `Wow, ${age} years old? Talk about UNCC, ${username}`;
      document.getElementById("yourh2").textContent = "Well we have gone through too much, sorry I ruined YOUR website! You can leave now this whole place is a mess :C. To delete this website press [Y]";
        document.getElementById("yourp").textContent = '. . .';
      
      // Clear out the label text too so it doesn't float around alone
      document.getElementById("label").textContent = '';
      agebox.remove(); // clear it away!

      // NEW: LISTEN FOR THE "Y" KEY TO WIPE THE SCREEN
      window.addEventListener("keydown", function wipeScreen(e) {
        if (e.key === "y" || e.key === "Y") {
          // 1. Erase all HTML elements inside the body completely
          document.body.innerHTML = "";
          
          // 2. Clear out any background classes you added (like 'new-background-y')
          document.body.className = "";
          
          // 3. Force the background style to be pure white
          document.body.style.backgroundColor = "white";
          
          // Remove this listener so it doesn't keep running in the background
          window.removeEventListener("keydown", wipeScreen);
        }
      });
    }
  });
});
