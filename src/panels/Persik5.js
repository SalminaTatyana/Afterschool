import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import stiker1 from '../img/stikers1.png';
import stiker2 from '../img/stikers2.png';
import stiker3 from '../img/stikers3.png';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import './Home.css';
const Persik4 = props=> (
	<Group id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
		</PanelHeader>
	<div className='dost'color='blue'>
		<br/>
		<h3 align="center" >Достижения Вашего ребенка</h3>
		<i align="center"><p>Здесь вы можете ознакомиться с достижениями</p>
			<p>ваших учеников</p></i>
		<br/>
		<div className="img1" align='center'>
			<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185520.svg?token=exp=1618662060~hmac=18953b03ab7345dd19d08ca34c4a706c" height="150" />
			<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185807.svg?token=exp=1618662054~hmac=1a258b9b483cc01d21e21577c884100b" height="150" />
			<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185780.svg?token=exp=1618662054~hmac=0723fc993fcc7dcf9e953559b47d1d11" height="150" />
			<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185604.svg?token=exp=1618662054~hmac=d3e988f34a0698a24639877bf64f2801" height="150" />
		</div>
		<Button > Смотреть больше </Button>
		<br/>
	</div>
	<br/>

	<br/>
	<div className="gal">
		<br/>
		<h3 align="center">Оплатить занятия</h3>
		<i align="center"><p>Здесь можно оплатить счета</p>
			<p> за дополнительное образование</p></i>
		<div align="center"> <img  src="https://www.flaticon.com/svg/vstatic/svg/4149/4149652.svg?token=exp=1618665654~hmac=3f577f320b28ac50dababd5938fa094b" height="200" /></div>
		<br/>
		<div align="center"><Button tretched size="l" mode="secondary" > Перейти к оплатам</Button></div>
		<br/>
	</div>

	<br/>
	</Group>
);

Persik4.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik4;
