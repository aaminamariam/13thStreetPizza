'use strict';

// Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled ("Thanks, your pizza will arrive in 20 minutes")
function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}

// --------------- Events -----------------------

function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const size = slots.pizza_size;
    let val = 0
    const intent = intentRequest.currentIntent.name;
    console.log(intent)

    // Pizzas
    if(intent =="GetPizzaOrder")
    {

        if (size == 'Large' )
        {
            val = 1000
                callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your pizza.Your Bill is Rs ${val}`}));
        }
       if (size == 'Medium 700' )
        {
            val = 700
                callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Okay, I have ordered your pizza.Your Bill is Rs ${val} `}));

        }
        if (size == 'Small 500' )
        {
            val = 500
                callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Okay, I have ordered your pizza.Your Bill is Rs ${val} `}));

        }
    }
    //  Deals

    if(intent == "order_deal")
    {
        const deal =slots.slotOne;
        if(deal =="2 Large pizzas")
        {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your deal.Your Bill is Rs 2000 `}));

        }
        if(deal =='2 Medium Pizzas with chicken wings' )
        {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your deal.Your Bill is Rs 1500 `}));

        }
        if(deal =="2 small Pizzas with Garlic bread and potato wedges")
        {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your deal.Your Bill is Rs 1200`}));

        }



    }

    if(intent == "sidesorder")
    {
        const side =slots.get_side;
        if(side =="Potato Wedges")
        {
                const pcs = slots.slot_t;

            if (pcs == "4 pcs")
            {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your side.Your Bill is Rs 250`}));
            }
             if (pcs == "8 pcs")
            {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your side.Your Bill is Rs 400`}));
            }

        }
        if(side =='Garlic bread' )
        {
        const pcs = slots.slot_t;

            if (pcs == "4 pcs")
            {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your side.Your Bill is Rs 250`}));
            }
             if (pcs == "8 pcs")
            {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your side.Your Bill is Rs 400`}));
            }

        }
        if(side =="chicken wings")
        {
            const pcs = slots.slot_t;

            if (pcs == "4 pcs")
            {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your side.Your Bill is Rs 300`}));
            }
             if (pcs == "8 pcs")
            {
        callback(close(sessionAttributes, 'Fulfilled',
        {
            'contentType': 'PlainText', 'content': `Okay, I have ordered your side.Your Bill is Rs 500`}));
            }
        }



    }
}

// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};
