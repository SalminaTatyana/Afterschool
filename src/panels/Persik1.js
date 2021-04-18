import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

const Persik1 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Мои достижения
		</PanelHeader>
		<div>
			<h3>Детская Художественная школа города Димитровграда</h3>
			<img  src="https://www.flaticon.com/svg/vstatic/svg/1497/1497726.svg?token=exp=1618665087~hmac=60460f31d59d472361e17443ce9b2403 " height="300" />
			<h4>Рейтинг организации:
				<img  src="https://neuro-msk.ru/wp-content/uploads/2019/02/5-star-rating.png" height="70" align="down"/></h4>
			<h4>Посещают 468 обучающихся</h4>
			<h3>Детская музыкальная школа города Димитровграда</h3>
			<img  src="https://www.flaticon.com/svg/vstatic/svg/2907/2907253.svg?token=exp=1618665178~hmac=999796eb8ab787a392510b1ca6a1cc7e " height="300" />
			<h4>Рейтинг организации:
				<img  src="https://neuro-msk.ru/wp-content/uploads/2019/02/5-star-rating.png" height="70" /></h4>
			<h4>Посещают 345 обучающихся</h4>
			<h4>Детская Спортивная школа города Димитровграда</h4>
			<img  src="https://www.flaticon.com/premium-icon/icons/svg/3311/3311579.svg" height="300" />
			<h5>Рейтинг организации:
				<img  src="https://neuro-msk.ru/wp-content/uploads/2019/02/5-star-rating.png" height="70" /></h5>
			<h4>Посещают 289 обучающихся</h4>
		</div>
	</Panel>
);

Persik1.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik1;
