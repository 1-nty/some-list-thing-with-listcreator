
function moving(list1,list2,counter){
  for(var i = 0 ; i<=counter; i++){
    let holder = list1.shift();
    list2.unshift(holder);
    console.log(`Moving ${holder} into list2..`);
  }
}
function createList(Max){
  let list = [];
  for(var i = 0; i<=Max; i++){
    list[i] = i;
    if(i===Max)
    return list
  }
}

let list1 = createList(55)
console.log(list1)

var listToBreakDown = ['aa',
'aah',
'aahed',
'aahing',
'aahs',
'aal',
'aali',
'aaliis',
'aals',
'aardvark',
'aardvarks',
'aardwolf',
'aardwolves',
'aargh',
'aarrgh',
'aarrghh',
'aarti',
'aartis',
'aas',
'aasvogel',
'aasvogels',
'ab',
'aba',
'abac',
'abaca',
'abacas',
'abaci',
'aback',
'abacs',
'abacterial',
'abactinal',
'abactinally',
'abactor',
'abactors',
'abacus',
'abacuses',
'abaft',
'abaka',
'abakas',
'abalones',
'abalones',
'abamp']
var emptyList = []
moving(listToBreakDown,emptyList,listToBreakDown.length)
