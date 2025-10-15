import gonjiam from '../images/gonjiam.jpg';
import wailing from '../images/The_Wailing_(film).png';
import fractured from '../images/Fracture_poster.jpeg';
import isawdevil from '../images/I_Saw_the_Devil_film_poster.jpg';
import alinterior from '../images/al_interior.jpg';
import janedoe from '../images/The_Autopsy_of_Jane_Doe.jpeg';
import birdbox from '../images/Bird_Box_(film).png';
import dantes from '../images/Dantes_Inferno_AAE.jpg';
import gins from '../images/Ghost_in_the_Shell_(2017_film).png';
import ghostland from '../images/ghostland.jpg';
import gravity from '../images/gravity.jpg';

export const movies = [
  {
        id:1,
        title:'Gonjiam',
        year:2018,
        country:'Corea del sur',
        genre:['Terror','False Footage'],
        rating:7.1,
        image:gonjiam,
        framever:'https://www.youtube.com/embed/KKEgeojjcGg?si=9g5zTQrxG-QaE5ks',
        //framever:'<iframe width="560" height="315" src="https://www.youtube.com/embed/KKEgeojjcGg?si=9g5zTQrxG-QaE5ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        synopsis:'Un par de adolescentes se adentran al infame hospital psiquiátrico Gonjiam del cual se dice esta embrujado debido a la desaparición de varios pacientes así como el misterioso suicidio de la directora que se ahorcó poco antes de la clausura del edificio. Los dos quieren entrar en la sala de cuidados intensivos conocida como la habitación 402 que es inaccesible y se cree que está maldita.',
        cast:['Oh Ah-yeon','Yoo Je-Yoon','Park Ji-hyun'],
        trailer:'https://www.youtube.com/watch?v=KKEgeojjcGg'
    },
    {
        id:2,
        title:'The Wailing',
        year:2016,
        country:'Corea del sur',
        genre:['Terror'],
        rating:6.5,
        image:wailing,
        framever:'https://www.youtube.com/embed/43uAputjI4k?si=EUugBwadbIwXYUn8',
        synopsis:'Un misterioso japonés llega a Gokseong , un pequeño pueblo en las montañas de Corea del Sur. Poco después, estalla una extraña infección que provoca que los aldeanos se vuelvan locos y maten violentamente a sus familias. La hija del oficial Jong-goo, Hyo-jin, se convierte en una de las poseídas. Jong-goo luego conoce a una misteriosa joven llamada Moo-myeong, quien afirma que el hombre japonés es un espíritu maligno.',
        cast:['Jun Kunimura','Kwak Do-won','Kim Hwan-hee'],
        trailer:'https://www.youtube.com/watch?v=43uAputjI4k'
    },
    {
        id:3,
        title:'Fractured',
        year:2019,
        country:'USA',
        genre:['Thriller'],
        rating:9.1,
        image:fractured,
        framever:'https://www.youtube.com/embed/sCimThZW-Ew?si=GXZS1hi-HBAnw-SX',
        synopsis:'Mientras conducían de regreso de una visita de Acción de Gracias a casa de sus padres, Joanne y su esposo, Ray, discutían sobre el estado de su relación. Tras regresar del baño, su hija de 6 años, Peri, perdió su espejo compacto, lo que llevó a sus padres a buscarlo. Mientras Ray estaba distraído, Peri se sobresaltó al ver a un perro en una obra abandonada. Ray lanzó una piedra para asustar al perro, asustando a Peri, quien cayó en un pozo. Ray, al intentar agarrarla, cayó en el pozo y se golpeó la cabeza',
        cast:['Sam Worthington','Lucy Capri','Lily Rabe'],
        trailer:'https://www.youtube.com/watch?v=sCimThZW-Ew'
    },
    {
        id:4,
        title:'I saw the devil',
        year:2010,
        country:'Corea del sur',
        genre:['Thriller'],
        rating:7.2,
        image:isawdevil,
        framever:'https://www.youtube.com/embed/xwWgp1bqVwE?si=Jem-T4NQGe_edrs4',
        synopsis:'Una noche de invierno, el automóvil de la joven Joo-yun sufre un desperfecto al pinchar una de sus llantas. Kyung-chul (Choi Min-sik), quien estaba cerca del lugar, se ofrece a ayudarla, pero la joven no acepta. Tras esto, el hombre la secuestra y conduce a su casa. Unas horas después ella despierta y le pide al hombre que no la mate, revelando que está embarazada; sin embargo, Kyung-chul la ignora y la mata brutalmente.',
        cast:['Lee Byung-hun','Choi Min-sik','Jeon Gook-hwan'],
        trailer:'https://www.youtube.com/watch?v=xwWgp1bqVwE'
    },
    {
        id:5,
        title:"À l'intérieur",
        year:2007,
        country:'Francia',
        genre:['Terror','Gore'],
        rating:8.9,
        image:alinterior,
        framever:'https://www.youtube.com/embed/rRGQKiR1WRs?si=pvSAaMLEDOE4w2Ea',
        synopsis:'Sarah Scarangelo es una joven embarazada que se encuentra expectante por ser madre primeriza, sin embargo, tanto ella como su marido Louise (Jean-Baptiste Tabourin) sufren un accidente automovilístico en el que, Louis muere. Cuatro meses después, llega la navidad, pero Sarah sigue deprimida por su pérdida. Esa misma tarde, se presenta una extraña mujer en su casa y le pide que la deje entrar para realizar una llamada de emergencia.',
        cast:['Alysson Paradis','Jean-Baptiste Tabourin','Claude Lulé'],
        trailer:'https://www.youtube.com/watch?v=rRGQKiR1WRs'
    },
    {
        id:6,
        title:'The Autopsy of Jane Doe',
        year:2016,
        country:'USA',
        genre:['Terror'],
        rating:9,
        image:janedoe,
        framever:'https://www.youtube.com/embed/mtTAhXuiRTc?si=Jj6A0RiEUTkFiZBl',
        synopsis:'En el condado de Grantham, Virginia, se encuentra el cadáver de una joven no identificada en la escena de un inexplicable homicidio múltiple. No se encuentran señales de entrada forzada, y se determina que las víctimas intentaban escapar de la casa donde ocurrieron los asesinatos. En el sótano se encuentra una desconocida semienterrada , que el sheriff entrega al forense local, Tommy Tilden, y a su hijo Austin, a quien está asesorando. Austin pospone su cita con su novia Emma para ayudar a su padre con la autopsia de la desconocida , prometiéndole reunirse con ella esa misma noche.',
        cast:['Brian Cox','Emile Hirsch','Olwen Catherine Kelly'],
        trailer:'https://www.youtube.com/watch?v=mtTAhXuiRTc'
    },
    {
        id:7,
        title:'Bird Box',
        year:2018,
        country:'USA',
        genre:['Terror','Thriller'],
        rating:8.8,
        image:birdbox,
        framever:'https://www.youtube.com/embed/UAeZdEQxWt4?si=3HdPm2iSJs3KbW7x',
        synopsis:'Una mujer llamada Malorie y dos niños navegan río abajo con los ojos vendados para llegar a un refugio, después de que unas fuerzas extrañas invadieran, y se encuentren provocando suicidios masivos alrededor del mundo, generando caos y disminuyendo la población.',
        cast:['Sandra Bullock','Trevante Rhodes','John Malkovich'],
        trailer:'https://www.youtube.com/watch?v=UAeZdEQxWt4'
    },
    {
        id:8,
        title:"Dante's Inferno",
        year:2010,
        country:'Jap/CS/SGP',
        genre:['Animation'],
        rating:7.6,
        image:dantes,
        framever:'https://www.youtube.com/embed/98WFrlW_ajg?si=SxObWYDp8DKhAokk',
        synopsis:'Al regresar de la Tercera Cruzada , Dante llega a casa y encuentra a sus sirvientes asesinados, a su padre muerto y a su amada prometida, Beatriz , agonizando por una puñalada en el estómago. Mientras ella muere, Lucifer arrastra a Beatriz hasta las puertas del Infierno y Dante la persigue. Virgilio aparece y se ofrece a guiarlo a través del Infierno. Abordan Caronte , un transbordador demoníaco y viviente que transporta almas al Primer Círculo del Infierno. Caronte ordena a los demonios que ataquen a Dante, ya que ningún ser vivo puede entrar. Dante los combate, mata a Caronte y lo conduce al primer círculo, el Limbo .',
        cast:[],
        trailer:'https://www.youtube.com/watch?v=98WFrlW_ajg'
    },
    {
        id:9,
        title:'Ghost in the Shell',
        year:2017,
        country:'USA',
        genre:['Cyberpunk'],
        rating:8,
        image:gins,
        framever:'https://www.youtube.com/embed/tRkb1X9ovI4?si=B7U-IXzWAuAD8mPl',
        synopsis:'En un futuro cercano, los humanos reciben mejoras cibernéticas como visión, fuerza e inteligencia. La desarrolladora de aumentación Hanka Robotics inicia un proyecto secreto para desarrollar un cuerpo artificial, o "caparazón", que pueda integrar un cerebro humano en lugar de una IA . Mira Killian, la única superviviente de un ciberataque terrorista que cobró la vida de sus padres, es elegida como sujeto de prueba tras sufrir daños irreparables en su cuerpo. A pesar de las objeciones de su diseñador, el Dr. Ouelet, Cutter, director ejecutivo de Hanka Robotics, decide utilizar a Killian como agente antiterrorista .',
        cast:[],
        trailer:'https://www.youtube.com/watch?v=tRkb1X9ovI4'
    },
    {
        id:10,
        title:'Ghostland',
        year:2018,
        country:'Fra/Can',
        genre:['Terror'],
        rating:7.8,
        image:ghostland,
        framever:'https://www.youtube.com/embed/66JuZ1cb03E?si=TVAYU2gklYBaeyGE',
        synopsis:'Una mujer llamada Pauline viaja con sus hijas adolescentes Beth y Vera a la casa aislada de su tía Clarisse, recientemente fallecida, después de que la heredaron en su testamento. Beth lee un artículo sobre una serie de allanamientos de viviendas en los que los padres son asesinados, pero las hijas se salvan. Sin que la familia lo sepa, alguien que conduce un camión de dulces los está acosando.',
        cast:[],
        trailer:'https://www.youtube.com/watch?v=66JuZ1cb03E'
    },
     {
        id:11,
        title:'Gravity',
        year:2013,
        conuntry:'USA',
        genre:['Science fiction'],
        rating:8.8,
        image:gravity,
        framever:'https://www.youtube.com/embed/rjb0kD-yht4?si=2r4PNdroU0jRlRoM',
        synopsis:'La doctora Ryan Stone es una especialista en su primera misión a bordo del transbordador espacial Explorer. Está acompañada por el veterano astronauta Matt Kowalski (George Clooney), quien está al mando de su última misión, antes de retirarse. Durante una caminata espacial para reparar el telescopio espacial Hubble, el Control de Misión en Houston (Ed Harris) advierte al equipo de que la destrucción de un satélite difunto por parte de los rusos ha provocado una reacción en cadena y la formación de una nube de desechos espaciales.',
        cast:[],
        trailer:'https://www.youtube.com/watch?v=rjb0kD-yht4'
    },
];