import { Injectable } from '@angular/core';

@Injectable()
export class songListService {
	songList;
constructor(){
  
	this.songList = [{
              name : "Tum hi ho - Aashique 2",
              capo : 1,
              chords : "Hum - E A D B (repeat) \n\n Kyunki - E A D B (repeat) \n\n Tere liye - C B C B \n Teri - A E A E \n\n Tere saath - D G Bm CD",
              chords_used : "E A Bm D",
              strumming_pattern : ""
          },
          {
              name : "Seasons in the sun - Westlife",
              capo : 0,
              chords : "Em D \n We had joy - E D A D",
              chords_used : "Em D A",
              strumming_pattern : ""
          },
          {
              name : "Thangame unai than - Naanum Rowdy Than",
              capo : 0,
              chords : "Intro - Em ' G D (repeat) \n\n Hey ne ena - E A E A (2) \n\n Adiye - A E A B \n\n Oru Billa - Em A B '",
              chords_used : "Em G D",
              strumming_pattern : ""
          },
          {
              name : "Don't cry Joni - Conway Twitty",
              capo : 0,
              chords : "Joni - D A A D \n Joni wrote - D G A D (repeat)",
              chords_used : "D A D G",
              strumming_pattern : ""
          },
          {
              name : "Tu jaane na - Ajab Prem Ki Gazab Kahani",
              capo : 0,
              chords : "Kaise bathaye - G E A D (2) \n Tu jaane - G D G G \n\n Milke bhi - _G D E D \n Milon ke - G C A DG",
              chords_used : "G E A D",
              strumming_pattern : ""
          },
          {
            name : "Black or White - MJ",
              capo : 0,
              chords : "I took - Em A  Em (2) \n Now I believe - A6 A Em (EmA Em) \n But if - Bm A E",
              chords_used : "Em A A6 Bm",
              strumming_pattern : ""
          },
          {
              name : "Wake up Susie - Everly Brothers",
              capo : 0,
              chords : "Intro - D FGF D FGF \n Wake up - D FGF \n The movie - G D G (2) \n We fell asleep - GD GD GDG \n Wake up - A G A \n What we gonna - AGA AGA AGA A \n Wake up - DAD \n Well - D G \n Wake up - AGA D",
              strumming_pattern : "",
              chords_used : "D F G A"
          },
          {
              name : "Closer - The Chainsmokers",
              capo : 1,
              chords : "Hey - CAdd7 DEm7 DEm7 DEm7 D repeat \n\n You know - CAdd7 D Em7 D (2 counts)",
              chords_used : "CAdd9 -> 330033 \n Em7 -> 022033",
              strumming_pattern : ""
          },
          {
              name : "Kabhi kabhi aditi - Jaane Tu Ya Jaane Na",
              capo : 3,
              chords : "Intro - Dstring -> 2 4 , Gstring -> 2 (2) \n Gsttring -> 4 to 2 \n\n Kabhi - E A E A \n Aise - E A Dsus2 D E \n\n Bridge : Dst -> 2 4 Gst ->2 (2) Dst -> 4 to 2 \n\n Soch Zara - GB G G (2) \n Ghana toh - Em A7sus4 Am7 E7 \n Hey Aditi - Am7 C69 D D \n Lekin - E7 Am7 C",
              chords_used : "E A Dsus2 D G B A7sus2 Am7 E7 C",
              strumming_pattern : ""
          },
          {
              name : "Nenjukul Peidhidum - Vaaranam Ayiram",
              capo : 0,
              chords : "Nenjukul - Am Asus4 Am Asus4 \n Neerukul - F#m Em \n Satrundu - Em D Em \n\n Oh Shanthi - Bm Am Em (2) \n\n Etho ondru - Am Em (4) \n\n Enodu - Bm Am (2)",
              chords_used : "F#m Bm Am Em D",
              strumming_pattern : ""
          },
          {
              name : "Summer of 69' - Bryan Adams",
              capo : 0,
              chords : "Intro - D \n\n I got my - D ' Am ' (repeat) \n\n Oh when - B ' Am ' \n And - D ' G ' \n Those - B Am D",
              chords_used : "D Am B",
              strumming_pattern : ""
          },
          {
              name : "Kanmani Anbodu Kadhalan - Guna",
              capo : 1,
              chords : "Kanmani - C E Dm GC DG (1/2 count) \n Unna - C G C G \n Lala - C E Dm G C \n\n Entha kaayam - C ' FG C (2) \n Intha - E ' D FG (2) \n\n Manithan - A E A C \n\n Abiramiye - C G C ' C",
              chords_used : "C G",
              strumming_pattern : ""
          },
          {
              name : "Malare - Premam",
              capo : 2,
              chords : "Thulimanam - A D A D \n Niramar - A D E A (2) \n\n Kulirekum - E A D A (4) \n\n Azhage - A D ' ' \n Malare - F#m D ' A \n\n A D F#m D\n A D F#m A \n\n Malare Ninne - A E F#m ' \n Mizhivekiya - A ' D E \n Alivoden - A ' E F#m \n Azhagegiya - A ' D E \n\n Naan enthe - A ' ' ' \n Athilola - D ' E ' \n Thaalangal - A ' ' ' \n Or oru - D ' ' E \n\n Idarunna - A F#m A E \n Pranaya - A F#m D E (2) \n\n Kulirekum - E A D A (4) \n\n Azhage - A D ' ' \n Malare - F#m D ' A \n\n A D F#m D\n A D F#m A",
              chords_used : "A D E F#m",
              strumming_pattern : ""
          },
          {
              name : "New York Nagaram - Sillinu oru Kaathal",
              capo : 0,
              chords : "DUDU DUDU DUDU",
              chords_used : "Am F C G",
              strumming_pattern : ""
          },
          {
              name : "Kaathal Rojave",
              capo : 0,
              chords : "Kaadhal - Em B Em B \n E A B ' (2) \n\n Kanukul - E Am G B (4) \n\n Yenatho - E ' A B \n\n Thendral - E B E B \n Nananana - E A E A \n\n E Em Bm \n Em Am B7",
              chords_used : "Em B A Am B7",
              strumming_pattern : ""
          },
          {
              name : "Shake it off - Taylor Swift",
              capo : 0,
              chords : "A C G ' (8 counts) Repeat",
              chords_used : "A C G (dD dudu)",
              strumming_pattern : ""
          },
          {
              name : "Bad Blood - Taylor Swift",
              capo : 0,
              chords : "Cos baby - C G D Em (2) \n Its so sad to - CG DEm C",
              chords_used : "C G D Em (DDDDU or DU DD DU)",
              strumming_pattern : ""
          },
          {
              name : "Kaatrukuyile Manasukulle - Thalapathy",
              capo : 0,
              chords : "Kaatru - A C A C A (2) \n Ellorum - C A Dm G (2) \n\n Sondham - A G AD A (2) \n Oorakathu - A ' ' D (2) \n\n High - Dm C G A",
              chords_used : "A C D Dm",
              strumming_pattern : ""
          },
          {
              name : "Ennavale adi ennavale - Kadalan",
              capo : 0,
              chords : "Ennavale - D Bm D ' (2) \n Kaal - D A G A \n\n Kadhal - D Bm A ' \n D A G A \n\n Stanza - D ' Bm D D \n Swargama - D A G A (2)",
              chords_used : "D Bm A G",
              strumming_pattern : ""
          },
          {
              name : "Thalli pogathe - Acham Enbathu Madamayada",
              capo : 0,
              chords : "Intro - Am E G \n\n Yeno - Am F C E (2 counts) \n Manamo - A G G- G \n\n Kanelam - D F G ' \n Vizhin - Gm ' G F \n Nagarum nodigal - G \n Kasaiadi - Am \n\n Thali - Am ' C E \n Iruvar - A F C G \n\n Dhegam - Am F C E \n Aanal - A F G ' \n Oh - Am F C E",
              chords_used : "Am E G F C D (Am - 5th bar + 2)",
              strumming_pattern : ""
          },
          {
              name : "Allah ke bandhe - Kailash Kher",
              capo : 0,
              chords : "Toota - G D ' G (2) \n Girta - G Bm Em G (2) \n\n Allah ke - G Bm C G \n\n Khoke apne - F D G D \n Oo - F D ' F \n Kho - F D G D \n\n Gum ko - G Bm Em D \n Allah ke - G Bm",
              chords_used : "G D Bm Em F",
              strumming_pattern : ""
          },
          {
              name : "Enodu Nee Irunthal - I",
              capo : 5,
              chords : "A F C G",
              chords_used : "",
              strumming_pattern : ""
          },
          {
              name : "Hosanna - VTV",
              capo : 0,
              chords : "G E C D",
              chords_used : "G E C D",
              strumming_pattern : ""
          },
          {
              name : "Grenade - Bruno Mars",
              capo : 5,
              chords : "A F C G",
              chords_used : "A F C G",
              strumming_pattern : ""
          }];
}


       
            getSongList() {
              return this.songList;
            };
            setSongList(value) {
              this.songList = value;
            };
  

}