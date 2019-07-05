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
