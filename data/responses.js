/**
 * Created by cameronriera on 4/21/16.
 */

var phrasing = [
  'https://giphy.com/gifs/archer-dance-happy-BmX38GoChnxRe',
  'http://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-10.gif',
  'I swear to god I had something for this.',
  'Damn it, I had something for this!',
  'Uh... Phrasing!',
  'PHRASING!',
  'Oh. My. God. Hello? Are we still doing PHRASING?!',
  "Jesus, Phrasing!",
  'Why are we not still doing phrasing?',
  'Er, phrasing.',
  'Phrasing!\nAlso, has anyone seen Woodhouse?',
  'https://giphy.com/gifs/archer-sterling-VaWZIxqTkzKsU\nAh, PHRASING!'
];

var diatribeResponse = [
  'https://giphy.com/gifs/archer-fx-sterling-cbAb0vWhJqA2k',
  'https://giphy.com/gifs/archer-skytanic-danger-zone-H8iL56bXGjVE4',
  'https://giphy.com/gifs/archer-space-race-danger-zone-xGbA1gRCAj1jW',
  'https://giphy.com/gifs/archer-sterling-danger-zone-12esT7y9VVi7YY',
  'https://giphy.com/gifs/archer-sterling-danger-zone-1KjHBUoGbeN9e',
  'http://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-11.gif',
  'https://giphy.com/gifs/archer-bryan-cranston-IDPJpueOB5VE4',
  'Paging Kenny Loggins because you\'re in the *DANGER ZONE!*',
  'https://giphy.com/gifs/archer-reactiongifs-mrw-Kz420G0aGw5mU',
  'Danger zone. Duh!\nHaven\'t you ever seen Top Gun? Or like heard of legendary rock singer, songwriter, guitarist Kenny Freakin\' Loggins!?',
  'DANGER ZONE!'
];

var joinEvt = [
  'How -- hey! Just talking about you, and about how this isn\'t what it looks like.',
  'ITS LIKE SEEING THE FACE OF GOD!',
  'https://m.popkey.co/0e15f2/47D7R.gif',
  'Ugh, continuing the circle of WHY BOTHER!'
  //'Hah heh Aahahaaa. IT thinks its people!',
  //'And now we are all dumber'
];

var dangerZone = [
  'http://giphy.com/gifs/archer-danger-zone-uyAwhtcreKlS8',
  'http://giphy.com/gifs/archer-sterling-danger-zone-FZvDN82t81A0o',
  'http://giphy.com/gifs/archer-sterling-danger-zone-FzZmhc3JDGo9O',
  'http://giphy.com/gifs/archer-top-gun-fx-De5Lfx0LI1SjS',
  'http://giphy.com/gifs/archer-top-gun-fx-10K5qB48ijXneE',
  'https://giphy.com/gifs/archer-top-gun-iByd2dFdFwKn6'
];

var cantWont = ['Can\'t or won\'t?'];

var random = [
  'I’m not saying I invented the turtleneck, but I was the first person to realise its potential as a tactical garment. The tactical turtleneck! The… tactleneck.',
  'Are you kidding? Dude. Bros before apparent threats to national security.',
  'Hey, we\'re out here risking our lives every—many of the days!',
  'Lying is like 95% of what I do.',
  'Karate? The Dane Cook of martial arts? No, ISIS agents use Krav Maga.',
  'Hey, I am everybody\'s type.',
  'A little of Column \'A\', a little of Column \'B\'.',
  'Do you want ants? Because that\'s how you get ants.',
  'WOOOOO!!!!!',
  'READ A BOOK!',
  'IT REMEMBERS ME!',
  'IT DOES KNOW MY NAME!',
  'Name-dropper',
  'Don\'t say, \"high function alcoholism\"',
  'https://giphy.com/gifs/boys-name-FmhjPpYI83S7e',
  'https://giphy.com/gifs/archer-Td89ybyxkPK7e',
  'https://giphy.com/gifs/archer-DOuLOWb2jtBf2',
  'https://giphy.com/gifs/archer-sterling-uTN071VnRYqWY',
  'https://giphy.com/gifs/archer-sterling-archeredit-10Eb8nuefwUGLm',
  'https://giphy.com/gifs/archer-sterling-archeredit-mE39UI0Ho8K5O',
  'https://giphy.com/gifs/archer-sterling-archeredit-eGEojmj0cc37y',
  'https://giphy.com/gifs/drinking-archer-n0SYZLVDpJ1ZK',
  'https://giphy.com/gifs/archer-sterling-archeredit-LfCsyBOyVu3ra',
  'http://giphy.com/gifs/angry-drunk-archer-11sV0mwXMM5sJi',
  'http://giphy.com/gifs/archer-sterling-D6FQLH3DK4lPO',
  'http://giphy.com/gifs/archer-5-a4vbP6DrvOvfy',
  'https://giphy.com/gifs/archer-top-gun-fx-hb8QnDZ3DRUB2',
  'https://giphy.com/gifs/archer-29b8vQCWhROLK\nhttps://giphy.com/gifs/archer-G61YiNHRWrYDS\nhttps://giphy.com/gifs/archer-Lq0Vauj3GZMWs'
];

var derogatory = [
  'https://giphy.com/gifs/request-top-promo-c16UpkOrOenV6'
];

var leaveEvt = [
  'https://m.popkey.co/cb43a2/OXWKY.gif',
  'GOOD RIDDANCE!',
  'At least he died doing what he loved... Getting shot.',
  'Thank God for small miracles!',
  'Okay... Love our little talks!',
  'HOORAY!'
];


var welcomeMsg = 'Was anyone looking for the worlds greatest secret agent?' +
  '\n If not, just say my name `Sterling` or `Archer` and I\'ll be there... or not. It\'s not like I\'m your servant like Woodhouse.';

function all(){
  var allResponses = [];

  phrasing.forEach(function (phraseResp) {
    allResponses.push({type: 'PHRASING', text: phraseResp});
  });

  diatribeResponse.forEach(function (joinResp) {
    allResponses.push({type: 'DIATRIBE', text: joinResp});
  });

  joinEvt.forEach(function (joinResp) {
    allResponses.push({type: 'JOIN', text: joinResp});
  });

  leaveEvt.forEach(function (leaveResp) {
    allResponses.push({type: 'LEAVE', text: leaveResp});
  });

  dangerZone.forEach(function (dangerZoneResp) {
    allResponses.push({type: 'DANGER_ZONE', text: dangerZoneResp});
  });

  random.forEach(function (randomResp){
    allResponses.push({type: 'RANDOM', text: randomResp});
  });

  derogatory.forEach(function (derogatoryResp) {
    allResponses.push({type: 'DEROGATORY', text: derogatoryResp});
  });

  return allResponses;
}

module.exports = {
  all: all(),
  phrasing: phrasing,
  diatribeResponse: diatribeResponse,
  dangerZone: dangerZone,
  cantWont: cantWont,
  random: random,
  derogatory: derogatory,
  welcome: welcomeMsg,
  joinEvt: joinEvt,
  leaveEvt: leaveEvt
};