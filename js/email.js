function SendMail(e) {
  // e.preventDefault();
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  console.log(params.from_name);
  console.log(params.email_id);

  console.log(params.message);

  emailjs
    .send("service_i8w9w47", "template_q6m7cyq", params, "V378SxujpOeHmgHR4")
    .then(function (res) {
      alert("Email Sent. " + "We will contact you soon");
      window.location.reload();
    })
    .catch((err) => console.log(err));

  // emailjs.send("service_i8w9w47", "template_q6m7cyq", {
  //   from_name: "swa",
  //   email_id: "swa@gmail.com",
  //   message: "hi",
  // });
}

// function SendMail(e) {
//   e.preventDefault();
//   // var params = {
//   //   from_name: document.getElementById("fullName").value,
//   //   email_id: document.getElementById("email_id").value,
//   //   message: document.getElementById("message").value,
//   // };
//   // console.log(params.from_name);
//   // console.log(params.email_id);

//   // console.log(params.message);
//   // var f = document.getElementById("emailf");
//   emailjs
//     .sendForm(
//       "service_i8w9w47",
//       "template_q6m7cyq",
//       e.target,
//       "V378SxujpOeHmgHR4"
//     )
//     .then(function (res) {
//       alert("Email Sent" + res.status);
//     });
// }
