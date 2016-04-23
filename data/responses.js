/**
 * Created by cameronriera on 4/21/16.
 */

var TYPE = {
  CANT_WONT: 'cant-wont',
  DANGER_ZONE: 'danger-zone',
  DEROGATORY: 'derogatory',
  GOODBYE: 'goodbye',
  PHRASING: 'phrasing',
  REACTION: 'reaction',
  RANDOM: 'random',
  WELCOME: 'welcome',
  WRONG: 'wrong'
};

var Response = function (type, val, tags, gif, lastUsed){
  this.val = val;
  this.type = type;
  this.tags = tags;
  this.gif = gif || false;
  this.lastUsed = lastUsed;

  Response.prototype.getType = function (){
    return this.type;
  };

  Response.prototype.getLastUsed = function (){
    return this.lastUsed;
  };

  Response.prototype.matchTags = function (val) {
    for(var i = 0, length = this.tags.length; i < length; i++){
      if(tags[i].indexOf(val) > -1){
        return true;
      }
    }
    return false;
  };

  Response.prototype.use = function () {
    this.lastUsed = new Date.valueOf();
    return this.val;
  };

  return Response;
};

var responses = [
  new Response(TYPE.PHRASING, 'https://giphy.com/gifs/archer-dance-happy-BmX38GoChnxRe', ['point, speachless', 'nothing', 'no\swords'], true),
  new Response(TYPE.PHRASING, 'http://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-10.gif', null, true),
  new Response(TYPE.PHRASING, 'I swear to god I had something for this.', ['forgot', 'funny', 'joke']),
  new Response(TYPE.PHRASING, 'Uh... Phrasing!'),
  new Response(TYPE.PHRASING, 'PHRASING!', ['yell']),
  new Response(TYPE.PHRASING, 'Oh. My. God. Hello? Are we still doing PHRASING?!'),
  new Response(TYPE.PHRASING, 'Jesus, Phrasing!'),
  new Response(TYPE.PHRASING, 'Why are we not still doing phrasing?'),
  new Response(TYPE.PHRASING, 'Er, phrasing.'),
  new Response(TYPE.PHRASING, 'Phrasing!\nAlso, has anyone seen Woodhouse?'),

  new Response(TYPE.DEROGATORY, 'https://giphy.com/gifs/archer-Td89ybyxkPK7e', null, true),
  new Response(TYPE.DEROGATORY, 'https://giphy.com/gifs/request-top-promo-c16UpkOrOenV6', ['middle', 'finger'], true),
  new Response(TYPE.DEROGATORY, 'https://m.popkey.co/f9743a/WkRQ6.gif', ['threaten', 'shoot', 'kill'], true),
  new Response(TYPE.DEROGATORY, 'I\'m sorry, I couldn\'t hear you over my deafening awesomeness!'),

  new Response(TYPE.GOODBYE, 'https://m.popkey.co/cb43a2/OXWKY.gif'),

  new Response(TYPE.DANGER_ZONE, 'https://giphy.com/gifs/archer-fx-sterling-cbAb0vWhJqA2k', ['something', 'danger'], true),
  new Response(TYPE.DANGER_ZONE, 'https://giphy.com/gifs/archer-skytanic-danger-zone-H8iL56bXGjVE4', ['danger', 'zone'], true),
  new Response(TYPE.DANGER_ZONE, 'https://giphy.com/gifs/archer-space-race-danger-zone-xGbA1gRCAj1jW', ['greeting', 'welcome', 'danger'], true),
  new Response(TYPE.DANGER_ZONE, 'https://giphy.com/gifs/archer-reactiongifs-mrw-Kz420G0aGw5mU', ['kenny', 'loggins', 'danger', 'zone'], true),
  new Response(TYPE.DANGER_ZONE, 'https://giphy.com/gifs/archer-sterling-danger-zone-1KjHBUoGbeN9e', ['lana'], true),
  new Response(TYPE.DANGER_ZONE, 'http://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-11.gif', ['lana', 'danger'], true),
  new Response(TYPE.DANGER_ZONE, 'https://giphy.com/gifs/archer-bryan-cranston-IDPJpueOB5VE4', ['zone', 'danger', 'venture'], true),
  new Response(TYPE.DANGER_ZONE, 'DANGER ZONE!\nhttps://giphy.com/gifs/archer-top-gun-iByd2dFdFwKn6', ['high-five', 'top', 'gun'], true),
  new Response(TYPE.DANGER_ZONE, 'Danger zone. Duh!\nHaven\'t you ever seen Top Gun? Or like heard of legendary rock singer, songwriter, guitarist Kenny Freakin\' Loggins!?'),
  new Response(TYPE.DANGER_ZONE, 'DANGER ZONE!'),

  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/boys-name-FmhjPpYI83S7e', ['hi', 'hey', 'hello'], true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/archer-DOuLOWb2jtBf2', null, true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/archer-sterling-uTN071VnRYqWY', ['baby', 'shave', 'money'], true),
  new Response(TYPE.RANDOM, 'https://m.popkey.co/5d413b/8y5XW.gif', ['drink', 'beer', 'hangover'], true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/archer-sterling-archeredit-mE39UI0Ho8K5O', ['lie'], true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/archer-sterling-archeredit-eGEojmj0cc37y', ['turtleneck', 'tactineck'], true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/drinking-archer-n0SYZLVDpJ1ZK', ['drink', 'vodka', 'bloody', 'mary', 'pray'], true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/archer-sterling-archeredit-LfCsyBOyVu3ra', ['mutiny', 'clown', 'funny'], true),
  new Response(TYPE.RANDOM, 'http://giphy.com/gifs/angry-drunk-archer-11sV0mwXMM5sJi', ['slap', 'shutup', 'cyril'], true),
  new Response(TYPE.RANDOM, 'https://giphy.com/gifs/archer-29b8vQCWhROLK\nhttps://giphy.com/gifs/archer-G61YiNHRWrYDS\nhttps://giphy.com/gifs/archer-Lq0Vauj3GZMWs',
    ['plane', 'train', 'not\sallowed', 'prohibit', 'drunk'], true),
  new Response(TYPE.RANDOM, 'http://www.quirkbooks.com/sites/default/files/u1177/Archer%20s3e12%20Space%20Race%20read%20a%20book%20(1).gif', ['know', 'read', 'book'], true),
  new Response(TYPE.RANDOM, 'http://www.quirkbooks.com/sites/default/files/u1177/Archer%20Lana%20read%20a%20book.gif', ['know', 'read', 'book'], true),
  new Response(TYPE.RANDOM, 'READ A BOOK!', ['know', 'read', 'book'], true),
  new Response(TYPE.RANDOM, 'Do you want ants? Because that\'s how you get ants.', ['ant', 'sweet', 'cake', 'birthday']),
  new Response(TYPE.RANDOM, 'Lying is like 95% of what I do.', ['lie', 'job']),
  new Response(TYPE.RANDOM, 'Karate? The Dane Cook of martial arts? No, ISIS agents use Krav Maga.', ['karate', 'martial arts']),
  new Response(TYPE.RANDOM, 'Hey, I am everybody\'s type.', ['type']),
  new Response(TYPE.RANDOM, 'A little of Column \'A\', a little of Column \'B\'.', ['column']),
  new Response(TYPE.RANDOM, 'Hey, we\'re out here risking our lives every—many of the days!', ['lives', 'risk']),

  new Response(TYPE.REACTION, 'WOOOO!!!!!', ['yay', 'woo', 'celebrate']),
  new Response(TYPE.REACTION, 'https://giphy.com/gifs/archer-sterling-VaWZIxqTkzKsU', ['wait', 'one\ssecond', 'hold\son'], true),
  new Response(TYPE.REACTION, 'http://giphy.com/gifs/archer-5-a4vbP6DrvOvfy', ['choose', 'choice', 'tough', 'decision', 'liquor', 'alcohol'], true),
  new Response(TYPE.REACTION, 'https://giphy.com/gifs/archer-top-gun-fx-hb8QnDZ3DRUB2', ['woo', 'celebrate', 'yay', 'birthday', 'drunk'], true),
  new Response(TYPE.REACTION, 'http://giphy.com/gifs/archer-sterling-D6FQLH3DK4lPO', ['woo', 'victory', 'yay'], true),

  new Response(TYPE.WELCOME, 'Was anyone looking for the worlds greatest secret agent?' +
               '\n If not, just say my name `Sterling` or `Archer` and I\'ll be there... or not. Its not like I\'m your servant like Woodhouse', ['welcome', 'join']),

  new Response(TYPE.WRONG, 'https://m.popkey.co/f9743a/WkRQ6.gif', ['wrong', 'right'], true)
];

function byType(type) {
  return pick(responses.filter(function (response) {
    return response.type === type;
  }));
};

function byTag(tag){
  return pick(responses.filter(function (response) {
    return hasTagVal(response.tags, tag);
  }));
};

function hasTagVal(tags, val){
  var hasVal = false;
  tags.forEach(function (tag) {
    if(new RegExp(tag, 'ig').test(val)){
      hasVal = true;
    }
  });
};

function pick(list) {
  var idx = Math.floor(Math.random() * list.length);
  return list[idx].use();
}

module.exports = {
  all: responses,
  byType: byType,
  byTag: byTag,
  TYPE: TYPE
  //triggers: triggers
};










