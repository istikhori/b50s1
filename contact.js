function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let number = document.getElementById("input-number").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;
  
    if (name === "") {
      return alert("Name must be filled!");
    } else if (email === "") {
      return alert("Email must be filled!");
    } else if (number === "") {
      return alert("Number must be filled!");
    } else if (subject === "") {
      return alert("Subject must be selected!");
    } else if (message === "") {
      return alert("Message must be filled!");
    }
  
    let emailReceiver = "istikhori96@gmail.com";
  
    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`;
    a.click();
  
    let messagers = {
      nama: name,
      email: email,
      phone_number: number,
      subject: subject,
      message: message,
    };
  
    console.log(messagers);
  }