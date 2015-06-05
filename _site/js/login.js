function login()
{
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  //alert("You entered " + username + " " + password);

  if(username === "testaccount1" && password === "testpass")
  {
    $('form').get(0).setAttribute('action', 'loginAccount1.html'); //this works
  }
  else if(username === "testaccount2" && password === "testpass")
  {
    $('form').get(0).setAttribute('action', 'loginAccount2.html'); //this works
  }
  else
  {
    alert("Account doesn't exist!");
  }
  return false;
}