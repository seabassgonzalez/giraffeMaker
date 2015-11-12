var giraffeMaker = function(name, height, age, hairStyle) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.age = age;
  newGiraffe.hairStyle = hairStyle;
  newGiraffe.hunger = 10;
  newGiraffe.isDopeEnough; 
  newGiraffe.dopeHairCut = "The Mr. T";

  newGiraffe.isTallEnough = function(treeHeight) {
    return newGiraffe.height > treeHeight;
  };

 newGiraffe.isHungry = function() {
    return newGiraffe.hunger > 0;
  };

 newGiraffe.isTooHipToQuit = function(age, hairStyle){
    if((age < 42) && (hairStyle == dopeHairCut){
	   return newGiraffe.isDopeEnough = true;
  };
 
  newGiraffe.say = function(option) {
    var sentences = {
      'greet': 'Hello, my name is ' + newGiraffe.name + ', it is nice to meet you.',
      'notHungry': newGiraffe.name + ' is not hungry.',
      'notTallEnough': newGiraffe.name + ' is too short to reach the trees.',
      'isASquare': newGiraffe.name + ' is a square.',
	 'isDope': newGiraffe.name + ' is Too Hip to Quit!', 
	 'ate': 'That was delicious!'
    };

    return console.log(sentences[option]);
  };

  newGiraffe.eat = function() {
    if (newGiraffe.isHungry()) {
      newGiraffe.hunger -= height;
      newGiraffe.say('ate');
    } else {
      newGiraffe.say('notHungry');
    }
  };

  newGiraffe.browse = function() {
    if (newGiraffe.isTallEnough(2)) {
      newGiraffe.eat();
    } else {
      newGiraffe.say('notTallEnough')
    }
  };

  newGiraffe.kickBack = function() {
    if (newGiraffe.isTooHipToQuit()){
    }
  };

  newGiraffe.cruise = function(){
    if (newGiraffe.isDopeEnough()){
      newGiraffe.
    } else {

    }
  };
  return newGiraffe;
};
