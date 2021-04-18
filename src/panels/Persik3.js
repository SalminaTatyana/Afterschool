import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import stiker1 from '../img/stikers1.png';
import stiker2 from '../img/stikers2.png';
import stiker3 from '../img/stikers3.png';
const Persik3 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Мои стикеры
		</PanelHeader>
		<img  src="https://bumper-stickers.ru/63892-thickbox_default/nabor-stikery-edinorogi.jpg" height="300" />
		<img  src="https://i.pinimg.com/originals/b9/4c/8c/b94c8cf4546d0a98eccd834ce9dc3d20.jpg" height="300" />
		<img  src="https://i.pinimg.com/originals/b3/3f/9f/b33f9f45be0d1ba43af6569c1afa26c0.jpg" height="300" />
	</Panel>
);

Persik3.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik3;
