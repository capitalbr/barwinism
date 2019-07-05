# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!({username: "testing", email: "testing", password: "testing"})

Artist.create!({
  name: "NF"
})

Album.create!({
  title: "Perception",
  artist_id: 1
})
Track.create!({
  title: "Let You Down", 
  body: "[Chorus]
Feels like we're on the edge right now
I wish that I could say I'm proud
I'm sorry that I let you down
Let you down
All these voices in my head get loud
I wish that I could shut them out
I'm sorry that I let you down
Le-le-let you down

[Verse 1]
Yeah, I guess I'm a disappointment, doin' everything I can
I don't wanna make you disappointed, it's annoying
I just wanna make you feel like everything I ever do
Was never tryna make an issue for you, but I guess the more you
Thought about everything you were never even wrong
In the first place, right? Yeah, I'ma just ignore you
Walking towards you with my head down
Lookin' at the ground, I'm embarrassed for you
Paranoia, what did I do wrong this time?
That's parents for you
Very loyal? Shoulda had my back
But you put a knife in it—my hands are full
What else should I carry for you?
I cared for you, but…

[Chorus]
Feels like we're on the edge right now
I wish that I could say I'm proud
I'm sorry that I let you down
Le-le-let you down
All these voices in my head get loud
I wish that I could shut them out
I'm sorry that I let you down
Le-le-let you down

[Verse 2]
Yeah, you don't wanna make this work
You just wanna make this worse
Want me to listen to you, but you don't ever hear my words
You don't wanna know my hurt, yeah
Let me guess, you want an apology, probably
How can we keep going at a rate like this?
We can't, so I guess I'ma have to leave
Please, don't come after me
I just wanna be alone right now, I don't really wanna think at all
Go ahead, just drink it off
Both know you're gonna call tomorrow like nothing's wrong
Ain't that what you always do?
I feel like every time I talk to you, you're in an awful mood
What else can I offer you?
There's nothing left right now, I gave it all to you

[Chorus]
Feels like we're on the edge right now
I wish that I could say I'm proud
I'm sorry that I let you down
Le-le-let you down
All these voices in my head get loud
I wish that I could shut them out
I'm sorry that I let you down
Le-le-let you down

[Verse 3]
Yeah, don't talk down to me
That's not gonna work now
Packed all my clothes and I moved out
I don't even wanna go to your house
Every time I sit on that couch
I feel like you lecture me, eventually, I bet that we
Coulda made this work
And prolly woulda figured things out
But I guess I'm a letdown
But it's cool, I checked out
Oh, you wanna be friends now?
Okay, let's put my fake face on and pretend now
Sit around and talk about the good times that didn't even happen
I mean, why are you laughing?
Must have missed that joke, let me see if I can find a reaction
No, but at least you're happy

[Chorus]
Feels like we're on the edge right now
I wish that I could say I'm proud
I'm sorry that I let you down
Oh, I let you down
All these voices in my head get loud
And I wish that I could shut them out
I'm sorry that I let you down
Oh, let you down

[Outro]
I'm sorry
I'm so sorry now
Yeah, I'm sorry that I let you down", 
  artist_id: 1,
  album_id: 1,
  song_art_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F9380032ab9e108adf7e54ecdc4ab9dd7.1000x1000x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=fbHbTBP_u7U",
  primary_tag: "rap",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: 1,
  album_id: 1
})


Track.create!({
  title: "Outcast", 
  body: "[Verse 1]
Woke up in the cell, where am I at?
Yeah, it's cold, but I like that
What am I, trapped?
Heart's beating out of my chest
Door's locked, but the keys are in my hands
Hmm, yeah, that's weird, it doesn't make sense, does it?
I make songs, I don't make friends—judge me
Might smile, but it ain't that funny
Sing along to the pain, they love it
Life's like a merry-go-round
And I'm still tryna figure it out
I like space, I don't fit in the crowds
My whole life I've been airin' it out
Oh, I'm gettin' into character now
Feels wrong, but it feels right
My feelings seal tight real nice
But I will fight anything to win
But I'm not Mike Tyson, I won't bite ya
But I will tell you if I don't like you
I am not the norm
I got my own shoes, I ain't tryna fit in yours
I never been married, but I've felt divorced
Hi, I'm Nate, have we met before?
Somebody told you I was wack? Check the source
Somebody told you I was back? Yes, of course
You got a problem with the fans? There's the door
You lookin' for the old me? Check the morgue, agh!
Not a fortune-teller, but I can see into the future better
Ain't no tellin' what'll happen when I pick up the microphone, get the fans together
Same style, but the songs are better
Been a year and a half, feels like it's gone forever
Ain't no drink in my hand, but you know the buzz is comin'
Big steps in the game, yeah, the Hulk is running
My thoughts are funny, it feels like I'm onto something, yeah

[Pre-Chorus]
I'm high off the music, my head's in the clouds
I kinda like it up here; I am not comin' down
I'd rather be alone, I am not good in crowds
Which is kinda confusin', I know—been that way since a child
They laugh and they tell me I'll never get out
I'm just tryna be me, I am nobody else
I don't care what you think, I'm just bein' myself
So I guess for now

[Chorus]
I'll just be the outcast
I'll just be the outcast
I'll just be the outcast
I guess I'll be the outcast

[Verse 2]
Yeah, I guess I don't fit the mold of rap
'Cause I'm respectin' women
I heard your record, I was laughin at it (Ha, ha, ha)
Maybe they would like me more if I got a little graphic with it
Nah, I don't wanna blend in with you little rappin' idiots—I'd rather be the outcast
I ain't never puttin' out trash
I take a hundred and staple it right to my tongue
I always put the money where my mouth's at, agh!
Feels good to be here now
I'm a weird person with a weird crowd
What, you don't like that?
That's cool, that's great, that's fine, okay, you can leave now
Got a weird smile, but I like it though
I paint it on me and I'm walkin' to the microphone
And put the caution tape around me like I did in Intro 1, yeah!
Yeah, they got me reminiscin' now!
Yeah, you done know I'm 'bout to go mad
Never wanted something so bad
Goosebumps through the whole track
Ain't no way I'm gonna hold back
Got me thinkin' that I'm cookin' in a meth lab
I don't blow it up in front of my own eyes
You look a little lost, you ain't get that?
Comin' from a town where nobody is a rapper
Guess I never get the memo, must've missed that
Wow!
Here I go in my feelings again, I can feel it again
So I lay in my bed, in my cell with the pen
And I dwell on my sins, I keep wonderin' when
Time to open the the doors, they don't know who I am
But I pick up the keys and I put on my Timbs
And I stare at the locks and the tat on my skin
And I think to myself, I don't wanna fit in

[Pre-Chorus]
I'm high off the music, my head's in the clouds
I kinda like it up here; I am not comin' down
I'd rather be alone, I am not good in crowds
Which is kinda confusin', I know—been that way since a child
They laugh and they tell me I'll never get out
I'm just tryna be me, I am nobody else
I don't care what you think, I'm just bein' myself
So I guess for now

[Chorus]
Yeah, I'll just be the outcast
I'll just be the outcast
I'll just be the outcast
I guess I'll be the outcast

[Verse 3]
Yeah, tryna focus
Take a knife to my head then I cut it open
Take my brain, put it on the floor—tryna figure out my motives
Y'all thought I was an issue when the door was locked
Nah, you should see me when the door opens
Every night I can hear voices
Put a camera in my face, might turn Joker like I'm Mike Posner
Always been a little complex
Difficult to process
Some of y'all wanna sit around and try to pick apart my bars
Here's some lines you could dissect:
If I'ma die, I'ma die givin' everything that I have
Take a deep breath, I don't need y'all's respect
I'm a reject kid at recess playin' games with his make-believe friends
Yeah, I don't ever take a night off
Lights off in the room and I write songs
I might fall into my thoughts once in a while when the mic's off
You ain't ever seen no drive like mine, better hop outta my car
I'm about to unlock my doors
You ain't got a seat belt on, better find one
Gettin' sick of people tellin' me to smile more
T.S. was a chapter I'll never forget, it was therapy for me
But it's time to turn the page now
Hey, shut up! I'm tryna tell 'em my story!
I'm sorry, I wasn't yellin' at y'all, I was talkin' to the voices
I rip out the drums of the industry's ears for tryin' to ignore me and playin' while singin' this chorus

[Chorus]
I'll just be the outcast
I'll just be the outcast
I'll just be the outcast
I guess I'll be the outcast

[Chorus]
I'll just be the outcast
I'll just be the outcast
I'll just be the outcast
I guess I'll be the outcast", 
  artist_id: 1,
  album_id: 1,
  song_art_url: "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F02543f01dfa688d0e7de36632a1cd58b.1000x1000x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=J7MYJ8Kxhwc",
  primary_tag: "rap",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: 2,
  album_id: 1
})


Track.create!({
  title: "10 Feet Down", 
  body: "[Intro: Ruelle]
Pu gnisir ,gnisir eb ll'I tuB
​efil elohw ym ylraen nwod teef neT
​thgin lla ,thgin llA
​pu ti llif am'I ,llif am'I
​ekil puc ytpme na ta nwod gniratS
​thgin gnol ,sthgin dloc ,sthgin dloC

[Verse 1: NF]
Yeah, I know the person in the mirror's not a perfect one
I look at him every day and think he's not enough
My life's a book that I don't really like to open up
I'm twenty-six, but I feel like I live in chapter one
I skim through it, I've been through it, they laugh at us
You think it's funny, yeah, laugh it up
I always felt like no one listened to me, that's how I grew up
Church is where I found God, but it's also where I learned to judge
Yeah, I had to learn there's a difference between
What you want, and what you really need
I've always been motivated by comments from people tellin' me Things they think I'll never be
And then I become it, this is my everything
There's so much that goes on in my head that people will never see
You probably be terrified of my memories, don't lecture me
Let me be, let me see, let me breathe, how they remember me
Doesn't alter who I am as a person to take my energy, yeah

[Chorus: Ruelle]
Hard days, cold nights
Staring down at an empty cup like
I'ma fill, I'ma fill it up
All day, all night
Ten feet down nearly my whole life
But I'll be rising, rising up
Sthgin dloC

[Verse 2: NF]
Yeah, my fans made me who I am, but they also deceived me
I've been allowed to live life like I'm already grieving
I'm at a table of liars but don't eat what they feed me
My hoodie over my face, so nobody can see me
I'm on a plane, 'bout to fly again
Looking out the window, take a moment to admire it
Wondering how high it is, wonder where the time has went
Then I shut the window and go back to feeling like I'm out my mind again, agh!
Yeah, seems like we're all trying to climb a ladder
It's crazy what we'll do to climb it faster
It's like we throw away the things in life that really matter
Just so we can make it to the top and wonder what we're even climbing after
I know the feeling of feeling like everything that you deal with
Don't never change, that's part of being a human, yeah
Life's what you make of it, take it, embrace it, and take it, and savor it
Ain't about what you did, it's what you became from it, agh!

[Chorus: Ruelle & NF]
Hard days, cold nights
Staring down at an empty cup like
I'ma fill, I'ma fill it up (oh, yeah)
All day, all night
Ten feet down nearly my whole life
But I'll be rising, rising up
Sthgin dloC

[Bridge: Ruelle]
We all want what we never had
The good life doesn't seem so bad
The good life doesn't seem so sad
Yeah, we all want what we never had, whoa

[Chorus: Ruelle]
Hard days, cold nights
Staring down at an empty cup like
I'ma fill, I'ma fill it up
All day, all night
Ten feet down nearly my whole life
But I'll be rising, rising up

[Bridge: Ruelle]
We all want what we never had
The good life doesn't seem so bad
The good life doesn't seem so sad
Yeah, we all want what we never had

[Chorus: Ruelle]
Hard days, cold nights
Staring down at an empty cup like
I'ma fill, I'ma fill it up

[Outro: Ruelle]
​pu gnisir ,gnisir eb ll'I tuB
​efil elohw ym ylraen nwod teef neT
​thgin lla ,thgin llA
​pu ti llif am'I ,llif am'I
​tkil puc ytpme na ta nwod gniratS
​thgin gnol ,sthgin dloc ,sthgin dloC", 
  artist_id: 1,
  album_id: 1,
  song_art_url: "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F02543f01dfa688d0e7de36632a1cd58b.1000x1000x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=My5lL0_sURw",
  primary_tag: "rap",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: 3,
  album_id: 1
})