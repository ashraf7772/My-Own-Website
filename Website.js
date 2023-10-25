window.onload = function(){  
    console.log("testing JavaScript is working");
    let signin = document.getElementById("signIn");
    let signupForm = document.getElementById("signUp");
    let signupButton = document.getElementById("signUp-button");
   
   
    
    signupForm.style.display='none';
    signupButton.onclick = function(){
      signupForm.style.display = 'block';
      document.getElementById("convince").style.display = 'none';
    };
  
   
  signin.onclick = function(){
    alert("This page is not ready yet"); 
  };
  
  
    let signup = document.getElementById('convince');
    if(signup !== null){
      signup.insertAdjacentHTML("beforeend","</br></br><strong> Will only take five minutes </strong>");
    }
  };
  
    let form = document.getElementById("signup-form");
    let first_pass = form.pass1;
    let confirm_pass = form.confirm_pass;
    first_pass.onchange = checkPassword;
    confirm_pass.onchange = checkPassword;
    
    
  function checkDate(){
    let form = document.getElementById("signup-form");
    
    let first_pass = form.pass1;
    let confirm_pass = form.confirm_pass;
    let errors = '';
      if(first_pass.value === confirm_pass.value){
      first_pass.setCustomValidity('');
      } else{
        errors += "Passwords Must Match";
      }
      if(first_pass.value.length < 2)
      errors += "Too short notice";
      if(first_pass.value.match(/[^a-zA-Z0-9]/))
      errors += "Only letters allowed";
      if(!first_pass.value.match(/[a-z]/))
      errors += "No lower Case";
      if(!first_pass.value.match(/[A-Z]/))
      errors += "No Upper case letter";
      if(!first_pass.value.match(/[0-9]/)){
      errors += "Numbers are needed";
      }
      first_pass.setCustomValidity( errors);
      first_pass.reportValidity();
  }
  