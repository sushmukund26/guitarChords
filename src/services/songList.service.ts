import { Injectable } from '@angular/core';

@Injectable()
export class songListService {
	songList;
constructor(){
  
	this.songList = [{
              name : "Tum hi ho - Aashique 2",
              language: "Hindi",
              capo : 1,
              chords : "Hum - E A D B (repeat) \n\n Kyunki - E A D B (repeat) \n\n Tere liye - C B C B \n Teri - A E A E \n\n Tere saath - D G Bm CD",
              chords_used : "E A Bm D",
              strumming_pattern : ""
          },
          {
              name : "Seasons in the sun - Westlife",
              language: "English",
              capo : 0,
              chords : "Em D \n We had joy - E D A D",
              chords_used : "Em D A",
              strumming_pattern : ""
          },
          {
              name : "Thangame unai than - Naanum Rowdy Than",
              language: "Tamil",
              capo : 0,
              chords : "Intro - Em ' G D (repeat) \n\n Hey ne ena - E A E A (2) \n\n Adiye - A E A B \n\n Oru Billa - Em A B '",
              chords_used : "Em G D",
              strumming_pattern : ""
          },
          {
              name : "Don't cry Joni - Conway Twitty",
              language: "English",
              capo : 0,
              chords : "Joni - D A A D \n Joni wrote - D G A D (repeat)",
              chords_used : "D A D G",
              strumming_pattern : ""
          },
          {
              name : "Tu jaane na - Ajab Prem Ki Gazab Kahani",
              language: "Hindi",
              capo : 0,
              chords : "Kaise bathaye - G E A D (2) \n Tu jaane - G D G G \n\n Milke bhi - _G D E D \n Milon ke - G C A DG",
              chords_used : "G E A D",
              strumming_pattern : ""
          },
          {
            name : "Black or White - MJ",
            language: "English",
              capo : 0,
              chords : "I took - Em A  Em (2) \n Now I believe - A6 A Em (EmA Em) \n But if - Bm A E",
              chords_used : "Em A A6 Bm",
              strumming_pattern : ""
          },
          {
              name : "Wake up Susie - Everly Brothers",
              language: "English",
              capo : 0,
              chords : "Intro - D FGF D FGF \n Wake up - D FGF \n The movie - G D G (2) \n We fell asleep - GD GD GDG \n Wake up - A G A \n What we gonna - AGA AGA AGA A \n Wake up - DAD \n Well - D G \n Wake up - AGA D",
              strumming_pattern : "",
              chords_used : "D F G A"
          },
          {
              name : "Closer - The Chainsmokers",
              language: "English",
              capo : 1,
              chords : "Hey - CAdd7 DEm7 DEm7 DEm7 D repeat \n\n You know - CAdd7 D Em7 D (2 counts)",
              chords_used : "CAdd9 -> 330033 \n Em7 -> 022033",
              strumming_pattern : ""
          },
          {
              name : "Kabhi kabhi aditi - Jaane Tu Ya Jaane Na",
              language: "Hindi",
              capo : 3,
              chords : "Intro - Dstring -> 2 4 , Gstring -> 2 (2) \n Gsttring -> 4 to 2 \n\n Kabhi - E A E A \n Aise - E A Dsus2 D E \n\n Bridge : Dst -> 2 4 Gst ->2 (2) Dst -> 4 to 2 \n\n Soch Zara - GB G G (2) \n Ghana toh - Em A7sus4 Am7 E7 \n Hey Aditi - Am7 C69 D D \n Lekin - E7 Am7 C",
              chords_used : "E A Dsus2 D G B A7sus2 Am7 E7 C",
              strumming_pattern : ""
          },
          {
              name : "Nenjukul Peidhidum - Vaaranam Ayiram",
              language: "Tamil",
              capo : 0,
              chords : "Intro\n G - 2 to 4 slide \n B - 2 3 5 3 2 \n G - 4 2 4 -> 9 9 \n\n G - 2 to 4 slide \n B - 2 3 5 3 2 \n G - 4 2 2 4 B2 G4 \n\n Nenjukul - Am Asus4 Am Asus4 \n Neerukul - F#m Em \n Satrundu - Em D Em \n\n Oh Shanthi - Bm Am Em (2) \n\n Etho ondru - Am Em (4) \n\n Enodu - Bm Am (2)",
              chords_used : "F#m Bm Am Em D",
              strumming_pattern : ""
          },
          {
              name : "Summer of 69' - Bryan Adams",
              language: "English",
              capo : 0,
              chords : "Intro - D \n\n I got my - D ' Am ' (repeat) \n\n Oh when - B ' Am ' \n And - D ' G ' \n Those - B Am D",
              chords_used : "D Am B",
              strumming_pattern : ""
          },
          {
              name : "Kanmani Anbodu Kadhalan - Guna",
              language: "Tamil",
              capo : 1,
              chords : "Kanmani - C E Dm GC DG (1/2 count) \n Unna - C G C G \n Lala - C E Dm G C \n\n Entha kaayam - C ' FG C (2) \n Intha - E ' D FG (2) \n\n Manithan - A E A C \n\n Abiramiye - C G C ' C",
              chords_used : "C G",
              strumming_pattern : ""
          },
          {
              name : "Malare - Premam",
              language: "Malayalam",
              capo : 2,
              chords : "Thulimanam - A D A D \n Niramar - A D E A (2) \n\n Kulirekum - E A D A (4) \n\n Azhage - A D ' ' \n Malare - F#m D ' A \n\n A D F#m D\n A D F#m A \n\n Malare Ninne - A E F#m ' \n Mizhivekiya - A ' D E \n Alivoden - A ' E F#m \n Azhagegiya - A ' D E \n\n Naan enthe - A ' ' ' \n Athilola - D ' E ' \n Thaalangal - A ' ' ' \n Or oru - D ' ' E \n\n Idarunna - A F#m A E \n Pranaya - A F#m D E (2) \n\n Kulirekum - E A D A (4) \n\n Azhage - A D ' ' \n Malare - F#m D ' A \n\n A D F#m D\n A D F#m A",
              chords_used : "A D E F#m",
              strumming_pattern : ""
          },
          {
              name : "New York Nagaram - Sillinu oru Kaathal",
              language: "Tamil",
              capo : 0,
              chords : "DUDU DUDU DUDU",
              chords_used : "Am F C G",
              strumming_pattern : ""
          },
          {
              name : "Kaathal Rojave",
              language: "Tamil",
              capo : 0,
              chords : "Kaadhal - Em B Em B \n E A B ' (2) \n\n Kanukul - E Am G B (4) \n\n Yenatho - E ' A B \n\n Thendral - E B E B \n Nananana - E A E A \n\n E Em Bm \n Em Am B7",
              chords_used : "Em B A Am B7",
              strumming_pattern : ""
          },
          {
              name : "Shake it off - Taylor Swift",
              language: "English",
              capo : 0,
              chords : "A C G ' (8 counts) Repeat",
              chords_used : "A C G (dD dudu)",
              strumming_pattern : ""
          },
          {
              name : "Bad Blood - Taylor Swift",
              language: "English",
              capo : 0,
              chords : "Cos baby - C G D Em (2) \n Its so sad to - CG DEm C",
              chords_used : "C G D Em (DDDDU or DU DD DU)",
              strumming_pattern : ""
          },
          {
              name : "Kaatrukuyile Manasukulle - Thalapathy",
              language: "Tamil",
              capo : 0,
              chords : "Kaatru - A C A C A (2) \n Ellorum - C A Dm G (2) \n\n Sondham - A G AD A (2) \n Oorakathu - A ' ' D (2) \n\n High - Dm C G A",
              chords_used : "A C D Dm",
              strumming_pattern : ""
          },
          {
              name : "Ennavale adi ennavale - Kadalan",
              language: "Tamil",
              capo : 0,
              chords : "Ennavale - D Bm D ' (2) \n Kaal - D A G A \n\n Kadhal - D Bm A ' \n D A G A \n\n Stanza - D ' Bm D D \n Swargama - D A G A (2)",
              chords_used : "D Bm A G",
              strumming_pattern : ""
          },
          {
              name : "Thalli pogathe - Acham Enbathu Madamayada",
              language: "Tamil",
              capo : 0,
              chords : "Intro - Am E G \n\n Yeno - Am F C E (2 counts) \n Manamo - A G G- G \n\n Kanelam - D F G ' \n Vizhin - Gm ' G F \n Nagarum nodigal - G \n Kasaiadi - Am \n\n Thali - Am ' C E \n Iruvar - A F C G \n\n Dhegam - Am F C E \n Aanal - A F G ' \n Oh - Am F C E",
              chords_used : "Am E G F C D (Am - 5th bar + 2)",
              strumming_pattern : ""
          },
          {
              name : "Allah ke bandhe - Kailash Kher",
              language: "Hindi",
              capo : 0,
              chords : "Toota - G D ' G (2) \n Girta - G Bm Em G (2) \n\n Allah ke - G Bm C G \n\n Khoke apne - F D G D \n Oo - F D ' F \n Kho - F D G D \n\n Gum ko - G Bm Em D \n Allah ke - G Bm",
              chords_used : "G D Bm Em F",
              strumming_pattern : ""
          },
          {
              name : "Enodu Nee Irunthal - I",
              language: "Tamil",
              capo : 5,
              chords : "A F C G",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Grenade - Bruno Mars",
              language: "English",
              capo : 5,
              chords : "A F C G",
              chords_used : "A F C G",
              strumming_pattern : ""
          },
          {
              name : "Pani da rang",
              language: "Hindi",
              capo : 0,
              chords : "Pani da - E E D D (2) \n Akhiyan - C D E \n\n Mahiyan - E D (2) \n Ranjhana - ED ED (2) \n\n Akha Da - E E D D \n Meri - C D E \n\n Kamali - C D C D \n Baarish - C D E",
              chords_used : "E D C",
              strumming_pattern : ""
          },
          {
              name : "Give me some sunshine",
              language: "Hindi",
              capo : 0,
              chords : "Intro - C C C F \n C C C G \n\n Repeat - C G C G \n C G F G",
              chords_used : "C G F",
              strumming_pattern : ""
          },
          {
              name : "Tanha Dil",
              language: "Hindi",
              capo : 3,
              chords : "Intro - A A C G D D A A \n\n Ankhon mein - A A CG D A (2) \n\n Manzil - C GD | AC D \n\n Tanha Dil - A E C D \n A E AC D D A \n\n Dil kash - A A C D \n A C G D \n\n Vade kiye - A CD | AG D",
              chords_used : "A C G D",
              strumming_pattern : ""
          },
          {
              name : "En Iniya Pon Nilave",
              language: "Tamil",
              capo : 3,
              chords : "Intro \n A A A A \n G2 B0 B2 B0 \n G2 B1 0 2 \n G2 B3 23 \n G2 B1 B0 G2 G0 D3 \n\n En iniya - A E A (2) \n Ninaivile - A Aaug C Em (2) \n\n Paneer - A A A Asus4 (2) \n Dmaj D D C \n C (repeat) \n\n Ven - A Asus4 G F C1/2 \n C G F E",
              chords_used : "A E C F G",
              strumming_pattern : ""
          },
          {
              name : "Moongil thootam",
              language: "Tamil",
              capo : 0,
              chords : "Intro - G G- G C \n B B- B+ \n C C- D \n E E' C C' C/ C+ \n C+ C+ E \n\n Moongil - E C1/2 D G \n E Bsus4 B7 Bsus4 \n Pournami - E C1/2 D G- \n G G A D \n\n Ithu pothum - D G A D \n G C 4TH E \n\n Kolathan karai - E D C D \n Siragu - G A D CG \n Mun kovam- D G C \n D C G CG",
              chords_used : "G C B D",
              strumming_pattern : ""
          },
          {
              name : "Sippi irukuthu",
              language: "Tamil",
              capo : 0,
              chords : "Sippi - F# ' ' C# \n Sindhai - C# ' ' F# \n\n Sandhangal - Bmaj F# G#m F# \n\n Sirikum - F# ' ' ' (repeat) \n Thevai - F#7 (w/o bar) \n\n Ninaika Bmaj ' ' ' \n\n Thamizho - Bmaj F# G#m F#",
              chords_used : "F# C# B G#m F#7",
              strumming_pattern : ""
          },
          {
              name : "Thendral vanthu",
              language: "Tamil",
              capo : 0,
              chords : "Thendral - Am ' G Am (2) \n Vanthu - Am ' ' Em (2) \n Unmaiya - D ' ' Am \n Thendral - A ' G Am \n\n Evarum - Am ' Em ' \n Am ' G ; (2) \n\n Oda - Am ' Em C (2) \n Nilaiya - Am E D Am",
              chords_used : "Amin G E D C",
              strumming_pattern : ""
          },
          {
              name : "Puthu velai mazhai",
              language: "Tamil",
              capo : 0,
              chords : "Puthu - G Gm G Gm (8 counts) \n Inga- - Gbar F G ' \n\n Nadiye - Am Em F G \n Ched dho -  Am Em FG B \n\n Pen ilatha - G Gm Am Bm (2) \n Ithu - G Gm F Gm \n G F Gm G",
              chords_used : "G Gm F Em B",
              strumming_pattern : "D DD"
          },
          {
              name : "China china aasai",
              language: "Tamil",
              capo : 0,
              chords : "China - D ' ' ' \n Aasmano - G ' B D \n G A D A7D \n\n 4 counts: \n Venilave pola - D E D E \n G A G A \n\n A D A7 D",
              chords_used : "D G B A A7 E",
              strumming_pattern : "D DU D DU D DU"
          },
          {
              name : "Krishna ne begane",
              language: "Tamil",
              capo : 2,
              chords : "Krishna - A ' Em A (2) \n Duthis - A ' EM D (2) \N\N So come - A ' E D (repeat) \n\ Time - Asus4 A Asus4 Em (1/2) \n Em A \n\n I'm waiting - Asus4 A",
              chords_used : "A Em D Asus4",
              strumming_pattern : ""
          },
          {
              name : "Yenai maatrum kadhale",
              language: "Tamil",
              capo : 0,
              chords : "Ethukuga - C ' ' Amin \n Edhai - C ' ' F \nVizhundalum - A F ' Am \n Un ninaivu - C Am F AmEm \n\n Ada kadhal - F Am Dm Am \n Sidharam - Dm Am C Dm (2) \n\n Yenai maatrum - Am Dm Am ' \n Yedhayum - F G Dm ' (3) \n\n Kathi illa - F Dm Am ' \n Vettu kuthu - F GDm Dm Am (2)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Hosanna - VTV",
              language: "Tamil",
              capo : 0,
              chords : "Yen ithaiyam - D Bm GA D Bm E D \n\n Antha neram - G E C D (2) Hosana - G E C D \n\n Bridge - F G Am Gm D3m B Bflat \n\ Yen inthaiyam - D# Cm G# Bflat \n last - D# Cm Fm D#",
              chords_used : "D F# G G# E",
              strumming_pattern : "DDUDUDUD"
          },
          {
              name : "Tainted Love",
              language: "English",
              capo : 3,
              chords : "Sometimes - Emin G C GAsus2 \n\n Once - E G C A Asus2 ' Emin",
              chords_used : "E G C Asus2",
              strumming_pattern : ""
          },
          {
              name : "You belong with me",
              language: "English",
              capo : 4,
              chords : "Your on the phone - D A Em G (2) \n\n She wears - E G D A E G A ' \n\n Chrous - D ' A ' E ' G ' \n\n I'm standing - E G D A",
              chords_used : "D A Em G",
              strumming_pattern : ""
          },
          {
              name : "All of me",
              language: "English",
              capo : 1,
              chords : "Intro - Em C G D (DDD) \n\n Pre-chorus - Am Am G D Am (D DU UDU) \n\n My heads - Am G \n But I'm - D A \n\n Cos all of me - G E Am D (repeat) \n Cos I give my - Em G G D",
              chords_used : "Em C G D Am",
              strumming_pattern : ""
          },
          {
              name : "Counting stars",
              language: "English",
              capo : 4,
              chords : "Lately - Am C \n Dreaming - G F (repeat) \n\n I could lie - F F \n\n Take that money - Am \n Every - F D",
              chords_used : "Am C G F",
              strumming_pattern : ""
          },
          {
              name : "Ek tara",
              language: "Hindi",
              capo : 0,
              chords : "Ore - G C (2) \n Tu hi - G C E \n Kyun - B G \n\n Jho - E \n Naino - B GD \n Kaise - GD C \n Ghoonjha - DG DG A CG \n\ Sun - G koi B Poori C DG \n Kaise - AC DG DG",
              chords_used : "G C D A E B",
              strumming_pattern : "DD UUD DUDU"
          },
          {
              name : "Pehla nasha",
              language: "Hindi",
              capo : 0,
              chords : "Chahe tum - F B F C \n Ke saathi - F C Dm B C \n\n Pehla - F D C \n Naya - F   C \n Karloon - B F D C \n B F C C \n Pehla - F B C F \n\n Udtha ki = F D C F (4) \n Ek ka - G#m C \n G#m D BC",
              chords_used : "F Bbm G#m C Dm",
              strumming_pattern : "DDU UD DUDU"
          },
          {
              name : "Chura liya hai tumne",
              language: "Hindi",
              capo : 0,
              chords : "Chura - A G \n Nazar - A E \n C G C G E \n\n Bahoon - C A (repeat) \n Tum - A G (repeat) A",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Count on me - Bruno Mars",
              language: "English",
              capo : 1,
              chords : "Intro - C \n\n If you ever - C E\n I'll - A G F (repeat) \n\n To find - Dm E\n When - F G \n\n You can - C E [8] \nAG F (2) c [4] \n\n Oh - E A G F  G \n\n Bridge\nYou ll - D E A G\n D E F G\n F C",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Mundhinam parthene",
              language: "Tamil",
              capo : 0,
              chords : "Mundhinam - Bm ' \n Saladai - Am (F#m) Bm (repeat) \n\n Vaanavil - F#m C#\nIpothu - F#M B\n\n Thula - Bm ' \n Bm F#M C# (repeat)\n\n Oh - C# Em (2) \n Bm F#m B",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Demons - Imagine Dragons",
              language: "English",
              capo : 0,
              chords : "C G A F",
              chords_used : "C G A F",
              strumming_pattern : ""
          },
          {
              name : "Meri Maa - Taare Zameen Par",
              language: "Hindi",
              capo : 0,
              chords : "Intro - C - 54323 54312 \n\n Main kabhi - C ' FC \n Par andhere - G F C\n\nTujhe - F G C \n F G ' C\n\n Jabhi Kabhi - C Em A \n Jhula - G Fm C (2)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Hotel California",
              language: "English",
              capo : 0,
              chords : "",
              chords_used : "B F# E A G D Em F#",
              strumming_pattern : ""
          },
          {
              name : "Safe and Sound - Capital Cities",
              language: "English",
              capo : 0,
              chords : "I could - F C\n I could - A G (2) \n Safe and sound - F C A G",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Hey, soul sister - Train",
              language: "English",
              capo : 4,
              chords : "Your lipstick - C ' G ' Amin ' F ' C ' G ' A ' F G \n\n Chorus - F F G CG | F F G CG (repeat)",
              chords_used : "C G Am F",
              strumming_pattern : "DDU UDU"
          },
          {
              name : "What makes you beautiful",
              language: "English",
              capo : 2,
              chords : "D G B A",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Just the way you are",
              language: "English",
              capo : 5,
              chords : "Intro - C A F C (16 counts) \n\n Her eyes - C A \n She's so - F C (repeat)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Stereo Hearts",
              language: "English",
              capo : 2,
              chords : "My hearts - E C \n Beats for - G D",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "I'm yours - Jason Miraz",
              language: "English",
              capo : 0,
              chords : "G D E C",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Sooraj Dooba Hai",
              language: "Hindi",
              capo : 0,
              chords : "D Bmin G A",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "The Lazy Song - Bruno Mars",
              language: "English",
              capo : 4,
              chords : "Intro - G D C\n\n Today - G D C (repeat) \n\n Swear I'm not - G B C\n\n Repeat - G D C\n\n Yes I said - A Bmin C D\n\n I ain't gonna - A D E\n No no no- C D E(2)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Nenjukulle - Kadal",
              language: "Tamil",
              capo : 0,
              chords : "Nenjukulle - G D G D(2)\n Vela - G D E D\n\n Mana mani - C AG D (2)\nNeer pona - E B C B\n Koda - C B A G7 F#7\nApo - A C E B\n Koda - C D E Bm7\n\nPacha - G D\n Ichi- AB CD (D)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Chaar Kadam - PK",
              language: "Hindi",
              capo : 1,
              chords : "Intro - G E A D G\n\nBin Kuch kahe - G E G E G E A\nChaar kadam - A D A D D D G (repeat)\n\nBridge - G C D C\nTing ting- G D E G\n\nFemale\nChaye udasi - G(6) A\nHaaste hasathe - A D A D D D G(repeat)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Aathi ena nee - Kathithi",
              language: "Tamil",
              capo : 0,
              chords : "Aathi - Dm C | Bb C (2)\n Kora kula - D G | F A (2) \n\n Ooru azhagi - Dm C \n Ullaga aahgi - C Bb C \n Vadi - C Bb A A A (G A)\n\n Un azhagil - Dm C Dm C (2)\n Un azhagil - Dm Bb C Dm\n\n Dm C Bb C\n Kaal mulaha - A G D F\n\nJadayile - D G (Em) F A\n D G (em) F G",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Why this kolaveri",
              language: "Tamil",
              capo : 1,
              chords : "Intro - Estring E E Dstring D \n Astring A A Dstring D (repeat)\n\nWhy this - E D A D\n Dislance la - E D A D(repeat)\n\n Kai la glass - E D C B\n\n Love love - E B C D\nGod I am - E B C D",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Elay Keechan",
              language: "Tamil",
              capo : 0,
              chords : "Intro - E2 A2 D D2 D A@ D\nA3 D2 G G2 G D2 G\n\n Elay - G C G C\n Vaale - G C G C\n\n Yela - G C G C (repeat)\n\n Sada sada sadavana - C G Dm G\n Unakaga - GA GA G C\nNe vera - AG C G\n\n Otha alai - C G CG C G\n\nNee thidu - G G Dm G (repeat)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Somewhere over the rainbow",
              language: "English",
              capo : 5,
              chords : "Intro - G D E C (4)\n G D E C C\n\n Ooo - G D C G (8)\n C B7 E C\n\n somwhere - G D C G (4)\n C G D E C\n\n Someday I wish - G D E C\n G D E C",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Ennoda Vaa Vaa - NEP",
              language: "Tamil",
              capo : 0,
              chords : "Ennoda - E D B Bm E (2)\n\n Sila - G E G A\n Aha anbe - D A C G E E Bm\n\n Kangal thodum - G D C D (2)\n Enodaya - G D C A D G D\n China - E Bm E Bm\n\n Sandai - D A C G E E Bm\n\n Kathal - G D C D (2)\nUnodaya - G D C A D G D\n Tharana - E Bm E Bm (2)\n\n Entha Desam - D A C G E E Bm",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "One Love - Blue",
              language: "English",
              capo : 4,
              chords : "Intro - E\n\n It's kind - A Em A Em (2)\n A D\n\n I refuse - AD Am AD Am\n I don't wanna - AD Am AD\n\n One love - CD Am D (2) \n Oh I do beleive - C D   Am\n\n Baby just - Am AD",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Cups - Anna Kendrick",
              language: "English",
              capo : 0,
              chords : "I got my - C\nThe one - A C\nAnd I - F A\nI'm leaving - G C\n\n When I'm gone - A\n You re gonna - F C\n You gonna miss - A F\n Your gonna - AG C",
              chords_used : "",
              strumming_pattern : "DDDD"
          },
          {
              name : "Love Story - Taylor Swift",
              language: "English",
              capo : 0,
              chords : "Intro - D ' Am ' Bm ' G '\n\nWe were both - D ' G ' Bm ' G ' \n I'm standing - D ' G ' Bm ' Am '\n\nThat you were Romeo - G Am Bm D\nI was crying - G Am Bm GA\n\nRomeo take me - D A Bm G A\n\n So I sneak out - D G Bm G\nSo close your eyes - D G Bm G\n\nCos you were - G Am Bm D\n G Am Bm GA\n\nRomeo take me - D A Bm GA\nBridge - D A D B\n\nRomeo save me - G Am Bm D\n G Am Bm GA\n\nMarry me - D A Bm G A (DD DUDU)",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Sollitale Ava Kadhala - Kumki",
              language: "Tamil",
              capo : 0,
              chords : "Solitaale - G Eb (f)\n Solumbothe - G Eb\n\nIthu pol - G F EbM7 (2) \n\n Ava sona - C Dm\nAthuku - Bb C D\n\nAmmai - G G\n Unodaya - C EbD\n Rendu - C EbD\n\n Manasayum - EbM7\nEllame - F D7\nVaruvathu - EbM7 F EbM7\nSandhosham - C D7",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Marry you - Bruno Mars",
              language: "English",
              capo : 3,
              chords : "Chorus - DDDD (16 counts)\nVerse - DD-D-\n\nIntro - D E G D\n\n It's a beautiful - D Dumb to do - E\nHey baby - G   D (2)\n\n I know - D E\n No one - G D (2)\n\nDon't say - D E\n Go go go - G D",
              chords_used : "",
              strumming_pattern : "DDU UDU"
          },
          {
              name : "Varaha Nadhika Oram - Sangamam",
              language: "Tamil",
              capo : 0,
              chords : "Intro - A\nKannil - A Kanatha -E A \n\n Varaha - A \n\n Kannil - A   E A\nKannil - F#m A A F#m\nKaanatha - A E A Abm\n\n Kanu thaku - A A F#m\nJal - A A \nSolu - Dbm A",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Musu musu Hasi - Shaan",
              language: "Hindi",
              capo : 0,
              chords : "Musu musu - G D\n Musu musu - Am G (2)\n\n Gham baat - G D\n Humse Tu - Am G (2) \n\n Jawan Dil - G D Am G\nJaisa - G D\n Tere Ho - D Am\n Aisi Halki - Am G\n\n Phir - C G D G\n\n Maana - G D Am G\n Tum to - C G D G",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Yedho Ondru - Lesa lesa",
              language: "Tamil",
              capo : 0,
              chords : "Yedho - Am (repeat)\n Un paadham - Dm G\n Un degam - DmF G\n Ullah - Dm G Am\n\n Oru 0 Dm G Am (2)\n\n Nalla manam - Am (repeat)\n Oru thai nee - Am Dm \n Intha - CFAm\nThaai - Am (repeat)\n Unai - C Dm \n Enai - C F Am\n\nKuzhantaiyum - Em Am (2)\n\nManam - AmG F\nNee - G Esus4",
              chords_used : "Am Dm G F C Esus4",
              strumming_pattern : ""
          },
          {
              name : "Luka Chupi - Rang de Basanti",
              language: "Hindi",
              capo : 0,
              chords : "Intro - Epow/BoE A2/B2\nEm/BoE A2/B2\nEm/Asus2 Em/Asus2 A2/B2\n\nLuka chupi - Em/Asus2 Em/Asus2 Em/Asus2\nAa jana - A2/B2 (2)\n\n Aaja sanh - Bpow/Em Asus/Em\nDhundhlagayi - Bpow/Em A2/B2 Epow(aajana)\n\nKya battao - Epow/BoE (2) A2 B2 (2)\nEpow/BoE (2) A2/B2 Bpow\n\nTere raha - F Em Asus2/A2 B2 Epow\nChanda tu hai kahan - Bm11 Epow (2) A2 Dpow",
              chords_used : "Epow B/E A2/E B2 Asus2 F#m11 Bm11 Dpow Bmaj Bpow C#m",
              strumming_pattern : ""
          },
          {
              name : "Stuck in my heart - C21",
              language: "English",
              capo : 0,
              chords : "Intro - G Dsus44 Cadd9\n\nYou are - G Dsus4 Cadd9\nLike - Cadd9   stars - Em7\n\n FOr that - D   are - Dsus4\n\nCan't you tell - G\nYOu ve - G Dsus4 Cadd9\nI know - Cadd9\nThat I never - Em7 (2)\n\nIf you hold - G 5432 G 6421 G 5432\nI can do - Cadd8\n\n You are - G 6532 Like a C 5431",
              chords_used : "G Dsus4 D Em7 Cadd7",
              strumming_pattern : ""
          },
          {
              name : "Shape of you",
              language: "English",
              capo : 2,
              chords : "Intro - G4 77 4 77 4 99 4 6 4 2 \n\nBm Em G Amaj",
              chords_used : "Bm Em G Amaj",
              strumming_pattern : "D UX D"
          }];
}


       
            getSongList() {
              return this.songList;
            };
            setSongList(value) {
              this.songList = value;
            };
  

}