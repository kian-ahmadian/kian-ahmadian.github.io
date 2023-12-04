const sendButton = document.querySelector("[form-btn]");
sendButton.addEventListener("click", function () {
    sendButton.innerText = "Loading..."
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://helli-messenger.ir/api/ticket/submit");
    const json = JSON.stringify({
      "content": document.querySelector("body > main > div > article.contact.active > section > form > label > textarea").value,
      "name": document.querySelector("body > main > div > article.contact > section > form > div > label:nth-child(1) > input").value,
      "email": document.querySelector("body > main > div > article.contact > section > form > div > label:nth-child(2) > input").value,
      "title": document.querySelector("body > main > div > article.contact.active > section > form > label:nth-child(3) > textarea").value,
    });
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (this.status == 201) {
        const jsonResponse = JSON.parse(this.responseText);
        alert(jsonResponse['message'])
        location.reload()
      }
    }
    xhr.send(json);
})