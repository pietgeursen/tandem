function validateForm() {
  console.log('...boom')
    var x = document.forms["searchForm"]["origin"].value;
    if (x == null || x == "") {
      var message = "Ooops...please enter a start point"
        document.getElementById("alert").innerHTML = message;
        return false;

    }
}
