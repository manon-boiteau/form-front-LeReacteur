const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Charged page");

  // Send form's data
  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // stop reloading page

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    console.log(data);

    const regEmail = /^[a-z0-9\.-]+@[a-z0-9-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/;

    if (regEmail.test(email.value)) {
      // Request to server
      if (firstname && lastname && email && subject && message) {
        const response = await axios.post("http://localhost:3000/form", data);
        console.log(response);
        alert("Thank you for your message 🌈");
      }
    }
  });
});
