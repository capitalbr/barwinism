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

#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Anna Kendrick"
})

album = Album.create!({
  title: "Trolls (Original Motion Picture Soundtrack)",
  artist_id: artist.id
})

track = Track.create!({
  title: "Get Back Up Again", 
  body: "I really hope I can do it
'Cause they’re all depending on me
I know that I must leave the only home
I’ve ever known
And brave the dangers of the forest
Saving them before they’re eaten
I mean, how hard can that be?

Looking up at a sunny sky, so shiny and blue
And there's a butterfly
Well, isn’t that a super fantastic sign
It’s gonna be a fantastic day
Such marvelousness it’s gonna bring
Gotta pocket full of songs that I’m gonna sing
And I’m ready to take on anything
Hooray!

Some super fun surprise around each corner
Just riding on a rainbow, I’m gonna be okay

Hey!
I’m not giving up today
There's nothing getting in my way
And if you knock knock me over
I will get back up again
Oh!
If something goes a little wrong
Well you can go ahead and bring it on
'Cause if you knock knock me over, I will get back up again

Woah oh oh oh oh oh oh, get back up again
Woah oh oh oh oh oh oh, ahhhh!

I’m marching along I've got confidence
I'm cooler than a pack of peppermints
And I haven't been this excited since
I can't remember when!

I'm off on this remarkable adventure
Just riding on a rainbow
What if it's all a big mistake?
What if it's more than I can take?
No! I can't think that way 'cause I know
That I’m really, really, really gonna be okay

Hey!
I’m not giving up today
There's nothing getting in my way
And if you knock knock me over
I will get back up again
Oh!
If something goes a little wrong
Well you can go ahead and bring it on
'Cause if you knock knock me over, i will get back up again


(Get up, get up, get up) woah oh oh oh oh oh oh
Get back up again
(Get up, get up, get up) woah oh oh oh oh oh oh

I’m okay!

(Get up, get up, get up) woah oh oh oh oh oh oh oh
And if you knock knock me over, knock knock me over
I will get back up again", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F041e793766ba9e3b7ae635739a618e13.1000x1000x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=gRx4ZTfEqtM",
  primary_tag: "pop",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})


#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Rascal Flatts"
})

album = Album.create!({
  title: "Me And My Gang",
  artist_id: artist.id
})

track = Track.create!({
  title: "Life Is a Highway", 
  body: "[Verse 1]
Whooo umm yeah
Life is like a road that you travel on
When there is one day here and the next day gone
Sometimes you bend, sometimes you stand
Sometimes you turn your back to the wind
There is a world outside every darkened door
Where blues will not haunt you anymore
Where brave are free and lovers soar
Come ride with me to the distant shore
We won't hesitate
To break down the garden gate
There's not much time left today

[Chorus]
Life is a highway
I want to ride it all night long
If you are going my way
I want to drive it all night long

[Verse 2]
Through all these cities and all these towns
It is in my blood and it is all around
I love you now like I loved you then
This is the road and these are the hands
From Mozambique to those Memphis nights
The Khyber Pass to Vancouver's lights

Knock me down get back up again
You are in my blood
I am not a lonely man
There is no load I cannot hold
Road so rough this I know
I will be there when the light comes in
Just tell them we are survivors

[Chorus]
Life is a highway
I want to ride it all night long
If you are going my way
I want to drive it all night long

Give me give me give me give me yeah

[Chorus]
Life is a highway
I want to ride it all night long
If you are going my way
I want to drive it all night long

There was a distance between you and I (between you and I)
A misunderstanding once
But now we look it in the eye

Ooh, yeah

There ain't no load that I can't hold
The roads are rough, this I know
I'll be there when the light comes in
Just tell them we're survivors

[Chorus]
Life is a highway
I want to ride it all night long
If you're going my way
I want to drive it all night long
Life is a highway
I want to ride it all night long
If you're going my way
I want to drive it all night long
Life is a highway
I want to ride it all night long
If you're going my way
I want to drive it all night long

Give me give me give me give me yeah", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fe4d842afe782a3bc54a802885b5efcc8.500x500x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=6UdZIh8_xGc",
  primary_tag: "rock",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})


#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Stromae"
})

album = Album.create!({
  title: "Racine carrée",
  artist_id: artist.id
})

track = Track.create!({
  title: "Papaoutai", 
  body: "[Couplet 1]
Dites-moi d'où il vient
Enfin je saurai où je vais
Maman dit que lorsqu'on cherche bien
On finit toujours par trouver
Elle dit qu'il n'est jamais très loin
Qu'il part très souvent travailler
Maman dit \"travailler c'est bien\"
Bien mieux qu'être mal accompagné
Pas vrai ?

[Pont]
Où est ton papa ?
Dis-moi où est ton papa ?
Sans même devoir lui parler
Il sait ce qui ne va pas
Ah sacré papa
Dis-moi où es-tu caché ?
Ça doit, faire au moins mille fois que j'ai
Compté mes doigts
Hey !

[Refrain]
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai ?
Où t'es, papaoutai ?
Où t'es, papaoutai ?
Où t'es, papaoutai ?
Où t'es, où t'es où, papaoutai ?
Où t'es
Où t'es...

[Couplet 2]
Quoi, qu'on y croit ou pas
Y aura bien un jour où on n'y croira plus
Un jour ou l'autre on sera tous papa
Et d'un jour à l'autre on aura disparu
Serons-nous détestables ?
Serons-nous admirables ?
Des géniteurs ou des génies ?
Dites-nous qui donne naissance aux irresponsables ?
Ah dites-nous qui, tiens
Tout le monde sait comment on fait des bébés
Mais personne sait comment on fait des papas
Monsieur Je-sais-tout en aurait hérité, c'est ça
Faut l'sucer d'son pouce ou quoi ?
Dites-nous où c'est caché, ça doit
Faire au moins mille fois qu'on a
Bouffé nos doigts
Hey !

[Refrain]
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai ?
Où t'es, papaoutai ?
Où t'es, papaoutai ?
Où t'es, papaoutai ?
Où t'es, où t'es où, papaoutai ?
Où t'es
Où t'es...

[Pont]
Où est ton papa ?
Dis-moi où est ton papa ?
Sans même devoir lui parler
Il sait ce qui ne va pas
Ah sacré papa
Dis-moi où es-tu caché ?
Ça doit, faire au moins mille fois que j'ai
Compté mes doigts
Hey
Où est ton papa ?
Dis-moi où est ton papa ?
Sans même devoir lui parler
Il sait ce qui ne va pas
Ah sacré papa
Dis-moi où es-tu caché ?
Ça doit, faire au moins mille fois que j'ai
Compté mes doigts
Hey !

[Refrain]
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai ?
Où t'es, papaoutai ?
Où t'es, papaoutai ?
Où t'es, papaoutai ?
Où t'es, où t'es où, papaoutai ?
Où t'es
Où t'es...", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fa1851e6bdc394d1e0e1d1bed937a68a7.1000x1000x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=oiKj0Z_Xnjc",
  primary_tag: "rap",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})


#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Adele"
})

album = Album.create!({
  title: "25",
  artist_id: artist.id
})

track = Track.create!({
  title: "River Lea", 
  body: "[Verse 1]
Everybody tells me it's 'bout time that I moved on
That I need to learn to lighten up and learn how to be young
But my heart is a valley, it's so shallow and manmade
I'm scared to death if I let you in that you'll see I'm just a fake
Sometimes I feel lonely in the arms of your touch
But I know that's just me 'cause nothing ever is enough
When I was a child I grew up by the River Lea
There was something in the water, now that something's in me

[Pre-Chorus]
Oh I can't go back, but the reeds are growing out of my fingertips
I can't go back to the river

[Chorus]
But it's in my roots, in my veins
In my blood and I stain every heart that I use to heal the pain
Oh it's in my roots, in my veins
In my blood and I stain every heart that I use to heal the pain
So I blame it on the River Lea, the River Lea, the River Lea
Yeah I blame it on the River Lea, the River Lea, the River Lea

[Verse 2]
I should probably tell you now before it's way too late
That I never meant to hurt you or lie straight to your face
Consider this my apology, I know it's years in advance
But I would rather say it now in case I never get the chance

[Pre-Chorus]
No I can't go back, but the reeds are growing out of my fingertips
I can't go back to the river

[Chorus]
But it's in my roots, in my veins
In my blood and I stain every heart that I use to heal the pain
Oh it's in my roots, in my veins
In my blood and I stain every heart that I use to heal the pain
So I blame it on the River Lea, the River Lea, the River Lea
Yeah I blame it on the River Lea, the River Lea, the River Lea
So I blame it on the River Lea, the River Lea, the River Lea
Yeah I blame it on the River Lea, the River Lea, the River Lea

[Outro]
River Lea, River Lea
River Lea
The River Lea-ea-ea
The River Lea-ea-ea
The River Lea-ea-ea", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x221/https%3A%2F%2Fimages.genius.com%2F6772172951a8192c8b3fd68f76c0ac13.594x595x1.png",
  youtube_url: "https://www.youtube.com/watch?v=lxRQlvmH-Uk",
  primary_tag: "pop",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})


#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Grace VanderWaal"
})

album = Album.create!({
  title: "Wonder Park (Original Motion Picture Soundtrack)",
  artist_id: artist.id
})

track = Track.create!({
  title: "Hideaway", 
  body: "[Verse 1]
Let's wrap a blanket 'round us
And go flyin' into outer space
We could be famous, speak a different language
Make our great escape

[Pre-Chorus]
I'll chase the stars inside your eyes
And follow you into the great unknown
We'll be alone

[Chorus]
So let's just play pretend and find a secret place
When the world around us says that we should act our age
The day is gonna come when there's no time left to waste
But we'll never grow up, I say we hide away

[Verse 2]
And build a city, something out of nothing
Make this place a home, a home
Stay make-believing, we'll go disappearing
Who would ever know?

[Pre-Chorus]
We'll never be too far apart
'Cause in the end, you and I both know
There's somewhere we can go

[Chorus]
So let's just play pretend and find a secret place
When the world around us says that we should act our age
The day is gonna come when there's no time left to waste
But we'll never grow up, I say we hide away

[Bridge]
Just want to hide away
Hide away, hide away
Hide away, hide away
We'll never grow up
Just want to hide away
Hide away, hide away
Hide away, hide away

[Chorus]
So let's just play pretend and find a secret place
When the world around us says that we should act our age
The day is gonna come when there's no time left to waste
But we'll never grow up, I say we hide away
So let's just play pretend and find a secret place
When the world around us says that we should act our age
The day is gonna come when there's no time left to waste
But we'll never grow up, I say we hide away
Don't make me grow up, I say we hide away", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F38e04e68f31f99650aa300208d3b8efe.1000x1000x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=k-prczfRWCE",
  primary_tag: "pop",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})



#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "LunchMoney Lewis"
})

album = Album.create!({
  title: "The Secret Life of Pets 2 (Original Motion Picture Soundtrack)",
  artist_id: artist.id
})

track = Track.create!({
  title: "It’s Gonna Be A Lovely Day (The Secret Life of Pets 2)", 
  body: "[Verse 1]
(Yeah)
I can feel the sun shining
I can see the stars aligning
I know that it's perfect timing, oh
I can feel my heart beating
I can feel the love peaking
I know that we're gonna need it, oh

[Pre-Chorus]
Just keep that smile upon your face
'Cause everything's gonna be okay
Just sing along with it

[Chorus]
I know somebody love me
Someone reach out and hug me
The road is getting bumpy
But it's gonna be a lovely day
I know you're feeling lonely
Someone reach out and hold me
You can't be acting grumpy
It's gonna be a lovely day

[Post-Chorus]
La-la-la-la-lovely
La-la-la-la-lovely
La-la-la-la-lovely
It's gonna be a lovely day

[Verse 2]
I see too many days like this
Hope you know that I dream
And you wanna cry 'cause we both need love
Well, I know today's gonna be a little different
Let's stay close, the sun keep blinding me

[Verse 3]
I don't know what you've been told
But we both know glitter don't make gold
Sung some songs, but we always told
But we both already know how this story goes
Let's make time to make something
Let's dream a lie to chase something
Let's love hard to say something
And don't forget it gets better

[Pre-Chorus]
Just keep that smile upon your face
'Cause everything's gonna be okay
Just sing along with it

[Chorus]
I know somebody love me (I know somebody love me)
Someone reach out and hug me (Someone reach out and hug me)
The road is getting bumpy (The road is getting bumpy)
But it's gonna be a lovely day (But it's gonna be a lovely day)
I know you're feeling lonely (I know you're feeling lonely)
Someone reach out and hold me (Someone reach out and hold me)
You can't be acting grumpy (You can't be acting grumpy)
It's gonna be a lovely day

[Post-Chorus]
La-la-la-la-lovely (La-lovely, lovely)
La-la-la-la-lovely (La-lovely, lovely)
La-la-la-la-lovely (La-lovely, lovely)
It's gonna be a lovely day
La-la-la-la-lovely
La-la-la-la-lovely
La-la-la-la-lovely
It's gonna be a lovely day

[Bridge]
Now if the moon goes down and the sun gets bigger
How many of you wanna pull up with us
To the function? (True)
It ain't nothing
Let your head, go, keep it jumpin'
Don't let your chin hang low
No matter who you are, you deserve a halo
Just need a little love, you can keep the pesos
Always here for some fun, that's just how the day goes

[Pre-Chorus]
Just keep that smile upon your face
'Cause everything's gonna be okay
Just sing along with it

[Chorus]
I know somebody love me (I know somebody love me)
Someone reach out and hug me (Someone reach out and hug me)
The road is getting bumpy (The road is getting bumpy)
But it's gonna be a lovely day (But it's gonna be a lovely day)
I know you're feeling lonely (I know you're feeling lonely)
Someone reach out and hold me (Someone reach out and hold me)
You can't be acting grumpy (You can't be acting grumpy)
It's gonna be a lovely day

[Post-Chorus]
La-la-la-la-lovely (La-lovely, lovely)
La-la-la-la-lovely (La-lovely, lovely)
La-la-la-la-lovely (La-lovely, lovely)
It's gonna be a lovely day
La-la-la-la-lovely (La-la-la-la-lovely)
La-la-la-la-lovely (La-la-la-la-lovely)
La-la-la-la-lovely
It's gonna be a lovely day", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fc9df84fd9a763db743b2e0907556b96f.268x268x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=1VRdMuf99tw",
  primary_tag: "pop",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})


#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Vera Blue"
})

album = Album.create!({
  title: "Sherlock Gnomes (Music From The Motion Picture)",
  artist_id: artist.id
})

track = Track.create!({
  title: "The One", 
  body: "[Verse 1]
I saw you dancing out the ocean
Running fast along the sand
A spirit born of earth and water
Fire flying from your hands
In the instant that you love someone
In the second that the hammer hits
Reality runs up your spine
And the pieces finally fit

[Chorus]
And all I ever needed was the one
Like freedom fields where wild horses run
When stars collide like you and I
No shadows block the sun
You're all I've ever needed
Baby you're the one

[Verse 2]
There are caravans we follow
Drunken nights in dark hotels
When chances breathe between the silence
Where sex and love no longer gel, oh
For each man in his time is Cain
Until he walks along the beach
And sees his future in the water
A long lost heart within his reach

[Chorus]
And all I ever needed was the one
Like freedom fields where wild horses run
When stars collide like you and I
No shadows block the sun
You're all I've ever needed
Uh, baby you're the one

And all I ever needed was the one
Like freedom fields where wild horses run
When stars collide like you and I
No shadows block the sun (oh)
You're all I've ever needed
Uh, baby you're the one

And all I ever needed was the one
Like freedom fields where wild horses run
When stars collide like you and I
No shadows block the sun (oh)
You're all I've ever needed
Uh, baby you're the one", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Ff340f2683a4ee8a8e627ed512f49919a.500x500x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=bDX4KoF0oJA",
  primary_tag: "pop",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})


#--------------------------------------------------------#
#--------------------------------------------------------#
artist = Artist.create!({
  name: "Dan Auerbach"
})

album = Album.create!({
  title: " Cars 3 (Original Motion Picture Soundtrack)",
  artist_id: artist.id
})

track = Track.create!({
  title: "Run That Race", 
  body: "Another day another dollar gone
When I get up in the morning I just can't go on
I feel the outstretch turns of time
I ain't lyin'

But somethin's callin' from down deep within
Like I finally started livin' for myself again
I saved the outstretch lands of time
Changed my mind

Cause I wanna run that race
I wanna run that race
I do it on my pace
As long as I get to run that race

I feel discouraged and I doubt myself
But you know you can't blame it on nobody else
Only you know where it is
You belong, sing along

We gotta run that race
We gotta run that race
I do it on my pace
As long as we get to run that race

When I lay my head on my pillow at night
I think about what still going right
Thank the stars up above
There's still things left I know

I wanna run that race
I wanna run that race
I wanna run that race", 
  artist_id: artist.id,
  album_id: album.id,
  song_art_url: "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F33cc1f3326afe4c66c5f7f26fa86b4d4.499x499x1.jpg",
  youtube_url: "https://www.youtube.com/watch?v=mPpPjdN3tyM",
  primary_tag: "rock",
  user_id: 1
})

TrackAlbumJoin.create!({
  track_id: track.id,
  album_id: album.id
})