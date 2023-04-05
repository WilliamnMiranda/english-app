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
		title: "Adicione e gerencie suas contas",
		text: "Você pode adicionar todas as contas em um só lugar e gerenciar suas financas do seu jeito",
		image: <Stage1 {...props} />,
		backgroundColor: '#59b2ab',
	},
	{
		key: 2,
		title: "Acompanhe suas economias",
		text: "Você pode acompanhar suas receitas, atividades de despesas e todas as estatísticas",
		image: <Stage2 {...props} />,
		backgroundColor: '#59b2ab',
	},
	{
		key: 3,
		title: "Defina suas metas",
		text: "Você pode definir suas metas de forma facil e pratica , com apenas alguma informações e iremos gerenciar tudo para você ",
		image: <Stage3 {...props} />,
		backgroundColor: '#59b2ab',
	},
];
