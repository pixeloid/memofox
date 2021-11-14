const functions = require("firebase-functions");


// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51JvgDWH4DvYICcWY3g7zfusdiHkq2tt6t3bhGmk1v4F7gm4uJbiEs0ne7uGNrWHnqB8Kvr7VLTGWQf4kY1Yc5DY7009xOw7wrw')
const cors = require('cors')({origin: true})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello: '+ request.query.name)
})

exports.hello = functions.https.onRequest((request, response) => {
  if(request.method == 'POST') {
    response.send('Hello: '+ request.query.lastName)
  } else {
    response.send('Please sent POST request!')
  }
})

exports.checkoutSession = functions.https.onRequest((request, response) => {

  cors(request, response, () => {
    stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    }, function(err, session) {
      response.send(session)
    });
  })

})
