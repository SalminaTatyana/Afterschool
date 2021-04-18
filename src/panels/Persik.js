import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Мои достижения
		</PanelHeader>
		<div className="ochiv">
		<table align="center">
			<tr>
				<td>
					<h3>Хорошее Начало</h3>
					<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185520.svg?token=exp=1618662060~hmac=18953b03ab7345dd19d08ca34c4a706c" height="200" />
				</td>
				<td>
					<h3>Первый юбилей</h3>
					<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185807.svg?token=exp=1618662054~hmac=1a258b9b483cc01d21e21577c884100b" height="200" />
				</td>
				<td>
					<h3>Мы не сдаемся</h3>
					<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185780.svg?token=exp=1618662054~hmac=0723fc993fcc7dcf9e953559b47d1d11" height="200" />
				</td>
			</tr>
			<tr>
				<td>
					<h3>Это еще не конец</h3>
					<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185604.svg?token=exp=1618662054~hmac=d3e988f34a0698a24639877bf64f2801" height="200" />
				</td>
				<td>
					<h3>И это мне нужно!</h3>
					<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185509.svg?token=exp=1618662054~hmac=6042551745adebff8ee0ad72058605d8" height="200" />
				</td>

			</tr>
		</table>
		</div>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
