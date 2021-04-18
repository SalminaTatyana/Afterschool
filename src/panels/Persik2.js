import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const Persik2 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Мое портфолио
		</PanelHeader>
		<div className="gal">
			<div className="gal1"><h> Усидчивому образу жизни я предпочитаю подвижный</h></div>
			<form name="myForm" className="joi">
				<input type="radio" name="languages" checked="1" value="Усидчивый" /><span>Да</span>
				<input type="radio" name="languages" value="2" /><span>Нет</span>
				<input type="radio" name="languages" value="3" /><span>Затрудняюсь ответить</span>
			</form>
			<div id="printBlock"></div>

			<div className="gal1"><h> Я бы мог заниматься музыкой, нежели рисованием</h></div>
			<form name="myForm" className="joi">
				<input type="radio" name="languages" checked="1" value="Усидчивый" /><span>Да</span>
				<input type="radio" name="languages" value="2" /><span>Нет</span>
				<input type="radio" name="languages" value="3" /><span>Затрудняюсь ответить</span>
			</form>
			<div id="printBlock"></div>

				<div className="gal1"><h> Делать что-то своими руками лучше, чем петь или танцевать</h></div>
			<form name="myForm" className="joi">
				<input type="radio" name="languages" checked="1" value="Усидчивый" /><span>Да</span>
				<input type="radio" name="languages" value="2" /><span>Нет</span>
				<input type="radio" name="languages" value="3" /><span>Затрудняюсь ответить</span>
			</form>
			<div id="printBlock"></div>

			<div className="gal1"><h>Выберите город проживания</h></div>
			<select id="selectItem" className="joi">

				<option id="chelyabinsk">Димитровград</option>
				<option id="moskva">Москва</option>
				<option id="piter">Санкт-Петербург</option>
				<option id="nnovgor">Нижний Новгород</option>
			</select>

			<br/>
			<br/>
			<div className="gal1"> <Button stretched size="l" mode="secondary"   onClick={function() {alert("Вам стоит подумать о занятиеях спортом")
				alert("Спасибо, что заполнил анкету! Так держать! Удачи в начинаниях!") }}  data-to="home"> Заполнить анкету </Button>
			</div>
			<br/>
			<div className="gal1">
				<br/>
			<h2>Грамоты, сертификаты, патенты, лецензии</h2>
				<br/>
				<i><p>Данный раздел существует специально</p>
				<p>для вашего портфолио!</p></i>
				<Button stretched size="l" mode="secondary" > Добавить документы </Button>
			</div>
			<br/>
		</div>
	</Panel>
);

Persik2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik2;
