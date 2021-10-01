const jsonfile = require('jsonfile')
const data = jsonfile.readFileSync('db.json')

// generate gift cards
for (var i = 4001; i <= 6000; i++) {
    data.giftCards.push({
      "id": i,
      "cardName": "Lifestyle Gift Card",
      "cardPoints": 100 + Math.ceil(Math.random() * 500),
      "cardCategory": "Ecommerce",
      "cardRetailer": "Lifestyle",
      "cardIssueDate": "Sun May 19 2021 15:43:25 GMT+0530 (India Standard Time)",
      "cardExpiryDate": "2025-06-29T00:00:00.000Z",
      "cardCount": i-4000,
      "cardImage": "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
      "cardVendor": "lifestyle",
      "cardShortDesc": "10% OFF",
      "cardLongDesc": "Lifestyle gift cards for everyone to shop multiple variety of clothes."
    });
}

// generate gift transactions
const SENDER = 'jalagamsurya.loriini@gmail.com'
const RECEIVER = 'jalagamsurya.loriini@gmail.com'
for (var i = 4001; i <= 5000; i++) {
    data.giftTransact.push(
        {
            id: i,
            "senderEmail": SENDER,
            "receiverEmail": RECEIVER,
            "cardId": 1,
            "cardName": "Yoyo10",
            "cardPoints": 123,
            "cardShortDesc": "10% OFF",
            "cardImage": "https://images.gyft.com/merchants/i-587-1346844989795-53_hd.png",
            "cardIssueDate": "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
            "cardExpiryDate": "Sun May 26 2019 15:43:25 GMT+0530 (India Standard Time)",
            "isRedeemed": false
    })
}

jsonfile.writeFile("db-gen.json", data, { spaces: 2, EOL: '\r\n'  }, function (err) {
  if (err) console.error(err)
})