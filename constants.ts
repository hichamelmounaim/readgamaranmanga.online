import { Arc, Chapter, Character, Comment } from "./types";
import mangaData from "./scraped_ru8jmi-gamaran.json";

// Gamaran began serialization on May 20, 2009
const SERIES_START = new Date("2009-05-20T00:00:00Z").getTime();
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export const MOCK_CHAPTERS: Chapter[] = [...mangaData.chapters]
  .sort((a, b) => b.chapter_number - a.chapter_number)
  .map(ch => ({
    id: String(ch.chapter_number),
    number: ch.chapter_number,
    title: ch.chapter_title,
    releaseDate: new Date(
      SERIES_START + (ch.chapter_number - 1) * MS_PER_WEEK
    ).toISOString(),
    pages: ch.image_urls,
  }));

export const CHARACTERS: Character[] = [
  {
    "id": "gama",
    "name": "Gama Kurogane",
    "role": "Protagonist",
    "grade": "Ogame School",
    "description": "A teenage prodigy swordsman of the Ogame School and the son of the legendary swordsman Jinsuke Kurogane.",
    "image": "https://picsum.photos/400/600?random=10"
  },
  {
    "id": "naoyoshi",
    "name": "Naoyoshi Washizu",
    "role": "Ally / Sponsor",
    "grade": "28th Son of Washizu",
    "description": "The 28th son of the Unabara lord who sponsors the Ogame School to represent him in the tournament.",
    "image": "https://picsum.photos/400/600?random=11"
  },
  {
    "id": "shinnojou",
    "name": "Shinnojou Sakura",
    "role": "Ally",
    "grade": "Ogame School Senior",
    "description": "A top disciple and senior student of the Ogame School known for his exceptional blade speed and cool head.",
    "image": "https://picsum.photos/400/600?random=12"
  },
  {
    "id": "zenmaru",
    "name": "Zenmaru Ichinose",
    "role": "Ally",
    "grade": "Ogame School Student",
    "description": "A proud and aggressive disciple of the Ogame School who fights using the giant tachi blade.",
    "image": "https://picsum.photos/400/600?random=13"
  }
];

export const ARCS: Arc[] = [
  {
    "id": "tournament_start",
    "title": "Unabara Tournament Start",
    "description": "Gama and Naoyoshi enter the deadly Unabara Domain martial tournament, confronting rival schools.",
    "chapterStart": 1,
    "chapterEnd": 50,
    "image": "https://picsum.photos/600/300?random=20"
  },
  {
    "id": "middle_clash",
    "title": "Middle Tournament Battles",
    "description": "The tournament intensifies as Gama faces off against the strongest martial arts factions and past enemies.",
    "chapterStart": 51,
    "chapterEnd": 120,
    "image": "https://picsum.photos/600/300?random=21"
  },
  {
    "id": "final_showdown",
    "title": "Final Showdown",
    "description": "Gama confronts the ultimate masters and his legendary father in a battle for survival and honor.",
    "chapterStart": 121,
    "chapterEnd": 194,
    "image": "https://picsum.photos/600/300?random=22"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    "id": "1",
    "user": "Fanatic99",
    "content": "Ludo is devouring everyone! What an absolute legend.",
    "date": "2 hours ago",
    "likes": 155
  },
  {
    "id": "2",
    "user": "SeriesFan",
    "content": "Engine is insane. Best character!",
    "date": "5 hours ago",
    "likes": 230
  },
  {
    "id": "3",
    "user": "Otaku",
    "content": "This manga is pure hype. The art is incredible.",
    "date": "1 day ago",
    "likes": 89
  }
];
