'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.bdef408f-5db2-4ef9-98ad-d4986a709e53";

var SKILL_NAME = "It Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me an It fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Bill Skarsgård, who plays Pennywise in the new adapation, is the younger brother of Alexander Skarsgård.",
    "Pennywise existed before the Big Bang. He crashed into Earth millions of years ago and first surfaced in 1715. Ever since then he has returned every 30 years to wreak havoc",
    "Pennywise is one of the many forms of It. He has also been known as Robert Gray, The Eater of worlds and Consumption to name a few.",
    "Pennywise is referenced in a few Stephen King novel. He is seen in a storm drain in the Tommyknockers. He is mentioned in Dreamcatcher, Gray Matter, eleven twenty-two sixty-three, and Insomnia",
    "Many people thought Pennywise was inspired by John Wayne Gacy but King has said it was actually Bozo from Howdy Doody that caused the idea.",
    "Some people have taken inspiration from Pennywise and prowled the streets at night causing terror.",
    "Alice Cooper was considered to play the role of Pennywise.",
    "Pennywises hair in the mini-series is actually Tim Curry's real hair.",
    "It preys on children because they are easily terrified and he says, 'You all taste so much better when you're afraid!.'",
    "It has many powers. He is a shapeshifter, can become partially invisible, uses telepathy and mind control. He can also kill plants with a single touch, teleport, has telekinesis and is photokinetic.",
    "In the novel, It takes the form of many other iconic horror figures such as Frankenstein, Dracula and even Jaws."
    
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};