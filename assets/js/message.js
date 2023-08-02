const sendButton = document.querySelector("[form-btn]");
sendButton.addEventListener("click", function () {
    sendButton.innerText = "Loading..."
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1076181407887532174/1jv7fIzECrOVti2SSeMISKWgnM71ezVxYNK7VthKQgB2d9Fs0HtM_bAMMew7iC1Klq2Y");
    const json = JSON.stringify({
      "content": null,
      "embeds": [
        {
          "title": "New Contact form",
          "color": 16243475,
          "description": document.querySelector("body > main > div > article.contact.active > section > form > label > textarea").value,
          "fields": [
            {
              "name": "Full Name",
              "value": document.querySelector("body > main > div > article.contact > section > form > div > label:nth-child(1) > input").value
            },
            {
              "name": "Email",
              "value": document.querySelector("body > main > div > article.contact > section > form > div > label:nth-child(2) > input").value,
              "inline": true
            },
            {
              "name": "Title",
              "value": document.querySelector("body > main > div > article.contact > section > form > div > label:nth-child(3) > input").value
            }
          ],
          "author": {
            "name": "GitHub",
            "url": "https://kian-ahmadian.ir"
          },
          "footer": {
            "text": "Developed by Kian Ahmadian"
          }
        }
      ],
      "attachments": []
    });
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      location.reload()
    }
    xhr.send(json);
})