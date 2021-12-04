let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
storyWords = story.split(' ')
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let betterWords = storyWords.filter(storyWord => {
   return !unnecessaryWords.includes(storyWord)
 })
 let numOverUsed = 0;
 let numOverUsed2 = 0
 let numOverUsed3 = 0
   for (betterWord of betterWords ){
   if(betterWord === 'really'){
     numOverUsed +=1
   }else if(betterWord === 'very'){
     numOverUsed2 +=1
   }else if(betterWord === 'basically'){
     numOverUsed3 +=1
   }
 }
 
 let sentences = 0;
 for(betterWord of betterWords){
   if(betterWord[betterWord.length - 1] === '!' || betterWord[betterWord.length - 1] === '.'){
     sentences +=1 ;
   }
 }
 console.log('Number of words: ',storyWords.length)
console.log('Number of sentences: ' +sentences)
console.log('You overused really ' +numOverUsed + ' times')
console.log('You overused really ' +numOverUsed2 + ' times')
console.log('You overused really ' +numOverUsed3 + ' times')
console.log(betterWords.join(' '))