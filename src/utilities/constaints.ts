import { bible } from ".";
import { createBibleTheme } from "../components/@theme/createBibleTheme";

export const themeMock = createBibleTheme({
	unstyled: false,
	defaultSize: "medium",
	bibleColors: {
		primary: "#FDCA40",
		secondary: "#F79824",
	},
	bibleSizes: {
		bibleHeight: {
			small: "256px",
			medium: "320px",
			portrait: "600px",
			large: "432px",
			xlarge: "600px",
			macro: "1000px",
		},
		bibleWidth: {
			small: "320px",
			medium: "480px",
			portrait: "480px",
			large: "640px",
			xlarge: "960px",
			macro: "1000px",
		},
		VerseTextSize: {
			large: "5px",
			small: "10px",
			medium: "15px",
			portrait: "15px",
			xlarge: "20px",
			macro: "25px",
		},
		VerseTitleSize: {
			large: "10px",
			small: "15px",
			medium: "20px",
			portrait: "25px",
			xlarge: "30px",
			macro: "35px",
		},
		VerseNumberSize: {
			large: "3px",
			small: "7px",
			medium: "11px",
			portrait: "11px",
			xlarge: "15px",
			macro: "20px",
		},
	},
	bibleHeading: {
		font: "primary",
		color: "primary",
	},
	jesusWordsColor: "red",
	bibleFonts: {
		primary: "Sans-serif",
		secondary: "Roboto",
		tertiary: "Arial",
		cuaternary: "Times New Roman",
	},
	bibleVerses: {
		color: "secondary",
		font: "secondary",
		spaceBetweenVerses: "20px",
		spaceBetweenVerseAndNumber: "5px",
		spaceBetweenVersesAndTitle: "10px",
		spaceBetweenTitleAndSubTitle: "10px",
	},
});

export const bibleMock: bible = {
	lenguages: ["en", "es"],
	versions: [
		{
			abrev: "RVR1960",
			name: "Reina-Valera",
			testament: [
				{
					abrev: "NT",
					name: "Nuevo testamento",
					amountBooks: 0,
					amountChapters: 0,
					amountVerses: 0,
					books: [
						{
							abrev: "Jn",
							name: "Juan",
							amountChapters: 11,
							amountVerses: 879,
							testament: "NT",
							chapters: [
								{
									versesAcross: [
										{
											bookName: "Lucas",
											chapterNumber: 10,
											abrevBookName: "Lc",
											verses: [
												{
													number: 38,
													text: "Aconteció que yendo de camino, entró en una aldea; y una mujer llamada Marta le recibió en su casa.",
												},
												{
													number: 39,
													text: "Esta tenía una hermana que se llamaba María,@ la cual, sentándose a los pies de Jesús, oía su palabra.",
												},
											],
										},
										{
											bookName: "Juan",
											abrevBookName: "Jn",
											chapterNumber: 12,
											verses: [
												{
													number: 3,
													text: " Entonces María tomó una libra de perfume de nardo puro, de mucho precio, y ungió los pies de Jesús, y los enjugó con sus cabellos;@y la casa se llenó del olor del perfume.",
												},
											],
										},
									],
									number: 11,
									amountVerses: 57,
									verses: [
										{
											title: "Muerte de Lázaro",
											verses: [
												{
													text: `Estaba entonces enfermo uno llamado Lázaro, de Betania, la aldea de María y de Marta su hermana.@`,
													number: 1,
												},
												{
													text: "(María, cuyo hermano Lázaro estaba enfermo, fue la que ungió al Señor con perfume, y le enjugó los pies con sus cabellos.@)",
													number: 2,
												},
												{
													text: "Enviaron, pues, las hermanas para decir a Jesús: Señor, he aquí el que amas está enfermo.",
													number: 3,
												},
												{
													number: 4,
													text: "Oyéndolo Jesús, dijo: Esta enfermedad no es para muerte, sino para la gloria de Dios, para que el Hijo de Dios sea glorificado por ella.",
													jesusWords: true,
												},
											],
										},
										{
											verses: [
												{
													number: 5,
													text: "Y amaba Jesús a Marta, a su hermana y a Lázaro.",
												},
												{
													number: 6,
													text: "Cuando oyó, pues, que estaba enfermo, se quedó dos días más en el lugar donde estaba.",
												},
												{
													number: 7,
													text: "Luego, después de esto, dijo a los discípulos: Vamos a Judea otra vez.",
												},
												{
													number: 8,
													text: "Le dijeron los discípulos: Rabí, ahora procuraban los judíos apedrearte, ¿y otra vez vas allá?",
												},
												{
													number: 9,
													text: "Respondió Jesús: ¿No tiene el día doce horas? El que anda de día, no tropieza, porque ve la luz de este mundo;",
													jesusWords: true,
												},
												{
													number: 10,
													text: "pero el que anda de noche, tropieza, porque no hay luz en él.",
													jesusWords: true,
												},
												{
													number: 11,
													text: "Dicho esto, les dijo después: Nuestro amigo Lázaro duerme; mas voy para despertarle.",
												},
												{
													number: 12,
													text: "Dijeron entonces sus discípulos: Señor, si duerme, sanará.",
												},
												{
													number: 13,
													text: "Respondió Jesús: ¿No tiene el día doce horas? El que anda de día, no tropieza, porque ve la luz de este mundo;",
												},
												{
													number: 14,
													jesusWords: true,
													text: "Pero Jesús decía esto de la muerte de Lázaro; y ellos pensaron que hablaba del reposar del sueño.",
												},
												{
													number: 15,
													jesusWords: true,
													text: "y me alegro por vosotros, de no haber estado allí, para que creáis; mas vamos a él.",
												},
												{
													number: 16,
													text: "Dijo entonces Tomás, llamado Dídimo, a sus condiscípulos: Vamos también nosotros, para que muramos con él.",
												},
											],
										},
										{
											title: "la resurrección y la vida",
											verses: [
												{
													number: 17,
													text: "Vino, pues, Jesús, y halló que hacía ya cuatro días que Lázaro estaba en el sepulcro.",
												},
												{
													number: 18,
													text: "Betania estaba cerca de Jerusalén, como a quince estadios;",
												},
												{
													number: 19,
													text: "y muchos de los judíos habían venido a Marta y a María, para consolarlas por su hermano.",
												},
												{
													number: 20,
													text: "Entonces Marta, cuando oyó que Jesús venía, salió a encontrarle; pero María se quedó en casa.",
												},
												{
													number: 21,
													text: "Y Marta dijo a Jesús: Señor, si hubieses estado aquí, mi hermano no habría muerto.",
												},
												{
													number: 22,
													text: "Mas también sé ahora que todo lo que pidas a Dios, Dios te lo dará.",
												},
												{
													number: 23,
													text: "Jesús le dijo: Tu hermano resucitará.",
													jesusWords: true,
												},
												{
													number: 24,
													text: "Marta le dijo: Yo sé que resucitará en la resurrección, en el día postrero.",
												},
												{
													number: 25,
													jesusWords: true,
													text: "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá.",
												},
												{
													number: 26,
													jesusWords: true,
													text: "Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto?",
												},
												{
													number: 27,
													text: "Le dijo: Sí, Señor; yo he creído que tú eres el Cristo, el Hijo de Dios, que has venido al mundo.",
												},
											],
										},
										{
											title: "Jesús llora ante la tumba de Lázaro",
											verses: [
												{
													number: 28,
													text: "Habiendo dicho esto, fue y llamó a María su hermana, diciéndole en secreto: El Maestro está aquí y te llama.",
												},
												{
													number: 29,
													text: "Ella, cuando lo oyó, se levantó de prisa y vino a él.",
												},
												{
													number: 30,
													text: "Jesús todavía no había entrado en la aldea, sino que estaba en el lugar donde Marta le había encontrado.",
												},
												{
													number: 31,
													text: "Entonces los judíos que estaban en casa con ella y la consolaban, cuando vieron que María",
												},
												{
													number: 32,
													text: "María, cuando llegó a donde estaba Jesús, al verle, se postró a sus pies, diciéndole: Señor, si hubieses estado aquí, no habría muerto mi hermano.",
												},
												{
													number: 33,
													text: "Jesús entonces, al verla llorando, y a los judíos que la acompañaban, también llorando, se estremeció en espíritu y se conmovió,",
												},
												{
													number: 34,
													text: "y dijo: ¿Dónde le pusisteis? Le dijeron: Señor, ven y ve.",
													jesusWords: true,
												},
												{
													number: 35,
													text: "Jesús lloró.",
												},
												{
													number: 36,
													text: "Dijeron entonces los judíos: Mirad cómo le amaba.",
												},
												{
													number: 37,
													text: "Y algunos de ellos dijeron: ¿No podía este, que abrió los ojos al ciego, haber hecho también que Lázaro no muriera?",
												},
											],
										},
										{
											title: "Resurrección de Lázaro",
											verses: [
												{
													number: 38,
													text: "Jesús, profundamente conmovido otra vez, vino al sepulcro. Era una cueva, y tenía una piedra puesta encima.",
												},
												{
													number: 39,
													jesusWords: true,
													text: "Dijo Jesús: Quitad la piedra. Marta, la hermana del que había muerto, le dijo: Señor, hiede ya, porque es de cuatro días.",
												},
												{
													number: 40,
													jesusWords: true,
													text: "Jesús le dijo: ¿No te he dicho que si crees, verás la gloria de Dios?",
												},
												{
													number: 41,
													text: "Entonces quitaron la piedra de donde había sido puesto el muerto. Y Jesús, alzando los ojos a lo alto, dijo: Padre, gracias te doy por haberme oído.",
												},
												{
													number: 42,
													jesusWords: true,
													text: "Yo sabía que siempre me oyes; pero lo dije por causa de la multitud que está alrededor, para que crean que tú me has enviado.",
												},
												{
													number: 43,
													jesusWords: true,
													text: "Y habiendo dicho esto, clamó a gran voz: ¡Lázaro, ven fuera!",
												},
												{
													number: 44,
													jesusWords: true,
													text: "Y el que había muerto salió, atadas las manos y los pies con vendas, y el rostro envuelto en un sudario. Jesús les dijo: Desatadle, y dejadle ir.",
												},
											],
										},
										{
											title: "El complot para matar a Jesús",
											subTitle: "(Mt. 26.1-5; Mr. 14.1-2; Lc. 22.1-2)",
											verses: [
												{
													number: 45,
													text: "Entonces muchos de los judíos que habían venido para acompañar a María, y vieron lo que hizo Jesús, creyeron en él.",
												},
												{
													number: 46,
													text: "Pero algunos de ellos fueron a los fariseos y les dijeron lo que Jesús había hecho.",
												},
												{
													number: 47,
													text: "Entonces los principales sacerdotes y los fariseos reunieron el concilio, y dijeron: ¿Qué haremos? Porque este hombre hace muchas señales.",
												},
												{
													number: 48,
													text: "Si le dejamos así, todos creerán en él; y vendrán los romanos, y destruirán nuestro lugar santo y nuestra nación.",
												},
												{
													number: 49,
													text: "Entonces Caifás, uno de ellos, sumo sacerdote aquel año, les dijo: Vosotros no sabéis nada;",
												},
												{
													number: 50,
													text: "ni pensáis que nos conviene que un hombre muera por el pueblo, y no que toda la nación perezca.",
												},
												{
													number: 51,
													text: "Esto no lo dijo por sí mismo, sino que como era el sumo sacerdote aquel año, profetizó que Jesús había de morir por la nación;",
												},
												{
													number: 52,
													text: "y no solamente por la nación, sino también para congregar en uno a los hijos de Dios que estaban dispersos.",
												},
												{
													number: 53,
													text: "Así que, desde aquel día acordaron matarle.",
												},
											],
										},
										{
											verses: [
												{
													number: 54,
													text: "Por tanto, Jesús ya no andaba abiertamente entre los judíos, sino que se alejó de allí a la región contigua al desierto, a una ciudad llamada Efraín; y se quedó allí con sus discípulos.",
												},
											],
										},
										{
											verses: [
												{
													number: 55,
													text: "Y estaba cerca la pascua de los judíos; y muchos subieron de aquella región a Jerusalén antes de la pascua, para purificarse.",
												},
												{
													number: 56,
													text: "Y buscaban a Jesús, y estando ellos en el templo, se preguntaban unos a otros: ¿Qué os parece? ¿No vendrá a la fiesta?",
												},
												{
													number: 57,
													text: "Y los principales sacerdotes y los fariseos habían dado orden de que si alguno supiese dónde estaba, lo manifestase, para que le prendiesen.",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};

/* 
11 Estaba entonces enfermo uno llamado Lázaro, de Betania, la aldea de María
y de Marta su hermana.(A) 2 (María, cuyo hermano Lázaro estaba enfermo, fue
la que ungió al Señor con perfume, y le enjugó los pies con sus cabellos.(B))
3 Enviaron, pues, las hermanas para decir a Jesús: Señor, he aquí el que amas
está enfermo. 4 Oyéndolo Jesús, dijo: Esta enfermedad no es para muerte, sino
para la gloria de Dios, para que el Hijo de Dios sea glorificado por ella.
5 Y amaba Jesús a Marta, a su hermana y a Lázaro. 6 Cuando oyó, pues, que estaba
enfermo, se quedó dos días más en el lugar donde estaba. 7 Luego, después de
esto, dijo a los discípulos: Vamos a Judea otra vez. 8 Le dijeron los discípulos:
Rabí, ahora procuraban los judíos apedrearte, ¿y otra vez vas allá? 9 Respondió
Jesús: ¿No tiene el día doce horas? El que anda de día, no tropieza, porque ve
la luz de este mundo; 10 pero el que anda de noche, tropieza, porque no hay luz
en él. 11 Dicho esto, les dijo después: Nuestro amigo Lázaro duerme; mas
voy para despertarle. 12 Dijeron entonces sus discípulos: Señor, si duerme,
sanará. 13 Pero Jesús decía esto de la muerte de Lázaro; y ellos pensaron
que hablaba del reposar del sueño. 14 Entonces Jesús les dijo claramente:
Lázaro ha muerto; 15 y me alegro por vosotros, de no haber estado allí, para que
creáis; mas vamos a él. 16 Dijo entonces Tomás, llamado Dídimo, a sus condiscípulos:
Vamos también nosotros, para que muramos con él. Jesús,

la resurrección y la vida

17 Vino, pues, Jesús, y halló que hacía ya cuatro días que Lázaro estaba en el sepulcro.
18 Betania estaba cerca de Jerusalén, como a quince estadios;
19 y muchos de los judíos habían venido a Marta y a María, para consolarlas por su hermano.
20 Entonces Marta, cuando oyó que Jesús venía, salió a encontrarle; pero María se quedó en casa.
21 Y Marta dijo a Jesús: Señor, si hubieses estado aquí, mi hermano no habría muerto.
22 Mas también sé ahora que todo lo que pidas a Dios, Dios te lo dará.
23 Jesús le dijo: Tu hermano resucitará. 24 Marta le dijo: Yo sé que resucitará en la resurrección, en el día postrero.
25 Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá.
26 Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto?
27 Le dijo: Sí, Señor; yo he creído que tú eres el Cristo, el Hijo de Dios, que has venido al mundo.

Jesús llora ante la tumba de Lázaro

28 Habiendo dicho esto, fue y llamó a María su hermana, diciéndole en secreto: El Maestro está aquí y te llama.
29 Ella, cuando lo oyó, se levantó de prisa y vino a él.
30 Jesús todavía no había entrado en la aldea, sino que estaba en el lugar donde Marta le había encontrado.
31 Entonces los judíos que estaban en casa con ella y la consolaban, cuando vieron que María
se había levantado de prisa y había salido, la siguieron, diciendo: Va al sepulcro a llorar allí.
32 María, cuando llegó a donde estaba Jesús, al verle, se postró a sus pies, diciéndole: Señor,
si hubieses estado aquí, no habría muerto mi hermano. 33 Jesús entonces, al verla llorando, y a los
judíos que la acompañaban, también llorando, se estremeció en espíritu y se conmovió,
34 y dijo: ¿Dónde le pusisteis? Le dijeron: Señor, ven y ve. 35 Jesús lloró.
36 Dijeron entonces los judíos: Mirad cómo le amaba.
37 Y algunos de ellos dijeron: ¿No podía este, que abrió los ojos al ciego, haber hecho también que Lázaro no muriera?

Resurrección de Lázaro

38 Jesús, profundamente conmovido otra vez, vino al sepulcro. Era una cueva, y tenía una piedra puesta encima.
39 Dijo Jesús: Quitad la piedra. Marta, la hermana del que había muerto, le dijo: Señor, hiede ya, porque es de cuatro días.
40 Jesús le dijo: ¿No te he dicho que si crees, verás la gloria de Dios?
41 Entonces quitaron la piedra de donde había sido puesto el muerto. Y Jesús, alzando los ojos a lo alto,
dijo: Padre, gracias te doy por haberme oído.
42 Yo sabía que siempre me oyes; pero lo dije por causa de la multitud que está alrededor, para que crean que tú me has enviado.
43 Y habiendo dicho esto, clamó a gran voz: ¡Lázaro, ven fuera! 44 Y el que había muerto salió, atadas
las manos y los pies con vendas, y el rostro envuelto en un sudario. Jesús les dijo: Desatadle, y dejadle ir.

El complot para matar a Jesús
(Mt. 26.1-5; Mr. 14.1-2; Lc. 22.1-2)
45 Entonces muchos de los judíos que habían venido para acompañar a María, y vieron lo que hizo Jesús, creyeron en él.
46 Pero algunos de ellos fueron a los fariseos y les dijeron lo que Jesús había hecho.
47 Entonces los principales sacerdotes y los fariseos reunieron el concilio, y dijeron: ¿Qué haremos? Porque este hombre hace muchas señales.
48 Si le dejamos así, todos creerán en él; y vendrán los romanos, y destruirán nuestro lugar santo y nuestra nación.
49 Entonces Caifás, uno de ellos, sumo sacerdote aquel año, les dijo: Vosotros no sabéis nada;
50 ni pensáis que nos conviene que un hombre muera por el pueblo, y no que toda la nación perezca.
51 Esto no lo dijo por sí mismo, sino que como era el sumo sacerdote aquel año, profetizó que Jesús había de morir por la nación;
52 y no solamente por la nación, sino también para congregar en uno a los hijos de Dios que estaban dispersos.
53 Así que, desde aquel día acordaron matarle.

54 Por tanto, Jesús ya no andaba abiertamente entre los judíos, sino que se alejó de allí a la región contigua al desierto, a una ciudad llamada Efraín; y se quedó allí con sus discípulos.

55 Y estaba cerca la pascua de los judíos; y muchos subieron de aquella región a Jerusalén antes de la pascua, para purificarse.
56 Y buscaban a Jesús, y estando ellos en el templo, se preguntaban unos a otros: ¿Qué os parece? ¿No vendrá a la fiesta?
57 Y los principales sacerdotes y los fariseos habían dado orden de que si alguno supiese dónde estaba, lo manifestase, para que le prendiesen.
*/
