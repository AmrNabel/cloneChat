import amr from "../assets/amr.jpg";
import ahmed from "../assets/ahmed abdelsatar.jpg";
import mody from "../assets/mahmoud hesham.jpg";
import hamam from "../assets/mohamed hamam.jpg";
import kamal from "../assets/kamal.jpg";
import lamia from "../assets/lamia.jpg";

const imgAmr = amr;
const imgAhmed = ahmed;
const imgMody = mody;
const imgHamam = hamam;
const imgKamal = kamal;
const imgLamia = lamia;

const data = [
  {
    name: "Amr",
    phone: "01159253972",
    qew: "Sales",
    img: imgAmr,
  },
  {
    name: "Ahmed",
    phone: "01033280992",
    qew: "Marketing",
    img: imgAhmed,
  },
  {
    name: "Mody",
    phone: "01151680001",
    qew: "Relations",
    img: imgMody,
  },
  {
    name: "Hamam",
    phone: "01117173280",
    qew: "Quality",
    img: imgHamam,
  },
  {
    name: "Kamal",
    phone: "01119153863",
    qew: "Marketing",
    img: imgKamal,
  },
  {
    name: "Lamia",
    phone: "01146275767",
    qew: "Service",
    img: imgLamia,
  },
];

const masseges = [
  {
    id: "1",
    speaker: "Agent",
    message: "Hi Dea`r, how can I help you",
    phone: "01159253972",
    date: new Date(),
  },
  {
    id: "2",
    speaker: "User",
    message: " I'm fine, I have issue on the connection, Can you help me?'",
    phone: "01159253972",
    date: new Date(),
  },
  {
    id: "3",
    speaker: "Agent",
    message: "Of course, I solved it can you try now again",
    phone: "01159253972",
    date: new Date(),
  },
  {
    id: "4",
    speaker: "User",
    message: "Yeh it is working now, Thank you",
    phone: "01159253972",
    date: new Date(),
  },
  {
    id: "5",
    speaker: "Agent",
    message: "You are welcome, Do you need any help else",
    phone: "01159253972",
    date: new Date(),
  },
  {
    id: "6",
    speaker: "User",
    message: "No thanks, Have a good day bro",
    phone: "01159253972",
    date: new Date(),
  },
  {
    id: "7",
    speaker: "Agent",
    message: "HI Ahmed, how are you",
    phone: "01033280992",
    date: new Date(),
  },
  {
    id: "8",
    speaker: "User",
    message: "I'm fine, Can we meet today'",
    phone: "01033280992",
    date: new Date(),
  },
  {
    id: "9",
    speaker: "Agent",
    message: "Of course, where are you now",
    phone: "01033280992",
    date: new Date(),
  },
  {
    id: "10",
    speaker: "User",
    message: "I am in the company",
    phone: "01033280992",
    date: new Date(),
  },
  {
    id: "11",
    speaker: "Agent",
    message: "of let's meet after 2 hrs",
    phone: "01033280992",
    date: new Date(),
  },
  {
    id: "12",
    speaker: "User",
    message: "Ok, I am waiting",
    phone: "01033280992",
    date: new Date(),
  },
  {
    id: "13",
    speaker: "Agent",
    message: "Where are are you now?",
    phone: "01151680001",
    date: new Date(),
  },
  {
    id: "14",
    speaker: "User",
    message: "I'm at house why?",
    phone: "01151680001",
    date: new Date(),
  },
  {
    id: "15",
    speaker: "Agent",
    message: "Can you get my phone from your brother now?",
    phone: "01151680001",
    date: new Date(),
  },
  {
    id: "16",
    speaker: "User",
    message: "Sorry, I can't I am working now",
    phone: "01151680001",
    date: new Date(),
  },
  {
    id: "17",
    speaker: "Agent",
    message: "No problem I will do it after my work",
    phone: "01151680001",
    date: new Date(),
  },
  {
    id: "18",
    speaker: "User",
    message: "Hi bro how are you",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "19",
    speaker: "Agent",
    message: "Good and you",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "20",
    speaker: "User",
    message: "Fine, will you will travell next week?",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "21",
    speaker: "Agent",
    message: "I don't know I will see, why?",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "22",
    speaker: "User",
    message: "I am thinking to gowith you",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "23",
    speaker: "Agent",
    message: "Ok I will decide and tell you",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "24",
    speaker: "User",
    message: "Ok, I am wating",
    phone: "01117173280",
    date: new Date(),
  },
  {
    id: "25",
    speaker: "User",
    message: "Are you free now?",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "26",
    speaker: "Agent",
    message: "Yes why?",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "27",
    speaker: "User",
    message: "I want you to help me on some code",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "28",
    speaker: "Agent",
    message: "Ok send me the link of google meet",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "29",
    speaker: "User",
    message: "Ok give me 5 mins",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "30",
    speaker: "Agent",
    message: "Ok I am waiting",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "31",
    speaker: "User",
    message: "There it is lwt's meet",
    phone: "01119153863",
    date: new Date(),
  },
  {
    id: "32",
    speaker: "User",
    message:
      "Hi I am Amr Nabel Hr from Atheel contact center can you cend your cv please",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "33",
    speaker: "Agent",
    message: "hi Sir, Ok I will",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "34",
    speaker: "User",
    message: "Great, And tell me about your expereiane please!",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "35",
    speaker: "Agent",
    message:
      "Ok Can we call after half an hour because I am in noise place now?",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "36",
    speaker: "User",
    message: "Ok No problem",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "37",
    speaker: "Agent",
    message: "Ok I will send you ",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "38",
    speaker: "User",
    message: "I am waiting",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "39",
    speaker: "User",
    message: "Great, And tell me about your expereiane please!",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "40",
    speaker: "Agent",
    message:
      "Ok Can we call after half an hour because I am in noise place now?",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "41",
    speaker: "User",
    message: "Ok No problem",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "42",
    speaker: "Agent",
    message: "Ok I will send you ",
    phone: "01146275767",
    date: new Date(),
  },
  {
    id: "43",
    speaker: "User",
    message: "I am waiting",
    phone: "01146275767",
    date: new Date(),
  },
];

export { data, masseges };
