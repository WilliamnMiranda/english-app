import Stage1 from "../../images/Stage1.svg";
import Stage2 from "../../images/Stage2.svg";
import Stage3 from "../../images/Stage3.svg";
const props = {
	width: "100%",
	height: "100%",
};
export const Slides = [
	{
		key: 1,
		title: "Estude com o melhor método: Flashcards!",
		text: "Aqui, você pode estudar de uma forma mais eficiente e divertida. Com nossos cartões de estudo, você pode memorizar qualquer coisa, desde idiomas até fórmulas matemáticas, de maneira fácil e rápida.",
		image: <Stage1 {...props} />,
		backgroundColor: '#59b2ab',
	},
	{
		key: 2,
		title: "Estude de onde voce quiser",
		text: "Com o nosso aplicativo de estudos de cartões, você tem a liberdade de estudar de onde quiser, em qualquer dispositivo. Seja no seu computador, tablet ou smartphone, o acesso ao seu material de estudo é fácil e prático",
		image: <Stage2 {...props} />,
		backgroundColor: '#59b2ab',
	},
	{
		key: 3,
		title: "Estude do seu jeito!",
		text: "Personalize suas configurações de estudo e aprenda da maneira que melhor se adapta a você. Você pode otimizar sua experiência de estudo e alcançar seus objetivos acadêmicos e profissionais de maneira mais eficiente",
		image: <Stage3 {...props} />,
		backgroundColor: '#59b2ab',
	},
];
