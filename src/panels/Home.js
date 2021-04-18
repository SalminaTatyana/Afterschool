import React from 'react';
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div'; 
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import './Home.css';
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>AfterSchool-отследи успехи!</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary" ></Header>}>

<div className="gal">
	<table >
	<tr>
		<td><br/>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} size={100} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''} 
				>
					{<h2>{fetchedUser.first_name} {fetchedUser.last_name}</h2> }


				</Cell>
		</td>
	<td>
		<div align="center"><img  src="https://www.flaticon.com/svg/vstatic/svg/3135/3135783.svg?token=exp=1618666581~hmac=37145ff53e52115faec2650a8dc57def" height="150" /></div>
	</td>
		<td><h2 >Уровень 27 </h2>
			<div align="center"><img  src="https://img.pngio.com/health-bar-png-free-health-barpng-transparent-images-30999-pngio-health-barpng-1190_1120.png" height="150" /></div>
		</td>
	</tr>
	<tr>
		<Button stretched size="l" mode="secondary" > Поделиться на стене <img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185583.svg?token=exp=1618667312~hmac=99d2c472ea84f2383e9b6dacd0ba359f" height="20" align="bottom" align="center" /></Button>
	</tr>

	<br/>
	</table>
</div>

		</Group>}
		<Group header={<Header mode="secondary">Ваши Успехи</Header>}>

			<div className='dost'color='blue'>
				<br/>
				<h3 align="center" >Достижения</h3>
				<i align="center"><p>Здесь вы можете ознакомиться с достижениями</p>
					<p>добытыми тяжелым трудом!</p></i>
				<br/>
				<div className="img1" align='center'>
				<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185520.svg?token=exp=1618662060~hmac=18953b03ab7345dd19d08ca34c4a706c" height="150" />
				<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185807.svg?token=exp=1618662054~hmac=1a258b9b483cc01d21e21577c884100b" height="150" />
				<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185780.svg?token=exp=1618662054~hmac=0723fc993fcc7dcf9e953559b47d1d11" height="150" />
				<img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185604.svg?token=exp=1618662054~hmac=d3e988f34a0698a24639877bf64f2801" height="150" />

				</div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik"> Смотреть больше </Button>
				<br/>
			</div>
			<br/>
			<div className="gal">
				<br/>
				<h3 align="center">Портфолио</h3>
				<i align="center"><p>Заполни небольшую анкету для определения наилучшего направления</p>
					<p> развития твоего таланта!</p></i>
				<div align="center"><img  src="https://www.flaticon.com/svg/vstatic/svg/4185/4185572.svg?token=exp=1618662054~hmac=4cabbf58d5146cffdf6b766a83bff796" height="150" /></div>
					<Button stretched size="l" mode="secondary" onClick={go} data-to="persik2"> Заполнить анкету </Button>
				<br/>
		    </div>
			<br/>
			 <div className="gal">
				 <br/>
			 	<h3 align="center">Мои хобби и курсы</h3>
				 <i align="center"><p>Поставь оценку организациям, учащим тебя</p>
				 <p>или узнай о самых востребованных из них в своем городе</p></i>
				 <div align="center"><img  src="https://www.flaticon.com/svg/vstatic/svg/1497/1497726.svg?token=exp=1618665087~hmac=60460f31d59d472361e17443ce9b2403 " height="150" />
				 <img  src="https://www.flaticon.com/svg/vstatic/svg/2907/2907253.svg?token=exp=1618665178~hmac=999796eb8ab787a392510b1ca6a1cc7e " height="150" />
				 <img  src="https://www.flaticon.com/premium-icon/icons/svg/3311/3311579.svg" height="150" /></div>
			 	<Button stretched size="l" mode="secondary"  onClick={go} data-to="persik1"> Посмотреть</Button>
					<br/>
			 </div>
			<br/>
			 <div className="gal">
				 <br/>
			 	<h3 align="center">Мои стикеры</h3>
				 <i align="center"><p>Получай баллы за активность, продолжительность посещения</p>
				 <p>используй их для приобретения наших личных стикеров</p></i>
				 <div align="center">
				  <img  src="https://bumper-stickers.ru/63892-thickbox_default/nabor-stikery-edinorogi.jpg" height="150" />
				  		<img  src="https://i.pinimg.com/originals/b9/4c/8c/b94c8cf4546d0a98eccd834ce9dc3d20.jpg" height="150" />
				  		<img  src="https://i.pinimg.com/originals/b3/3f/9f/b33f9f45be0d1ba43af6569c1afa26c0.jpg" height="150" />
				 </div>
			 <br/>
			 	<Button stretched size="l" mode="secondary"  onClick={go} data-to="persik3">Посмотреть</Button>
				 <br/>
				 <br/>
			 </div>
			<br/>
			<div className="gal">
				<br/>
				<h3 align="center">Оплатить образование</h3>
				<i align="center"><p>Заплати за учебу сегодня</p>
					<p>и смело учись завтра</p></i>
				<div align="center"> <img  src="https://www.flaticon.com/svg/vstatic/svg/4149/4149652.svg?token=exp=1618665654~hmac=3f577f320b28ac50dababd5938fa094b" height="200" /></div>
				<br/>
				<div align="center"><Button tretched size="l" mode="secondary" > Перейти к оплате</Button></div>
				<br/>
			</div>
			<br/>
			<Button stretched size="l" mode="secondary"  onClick={go} data-to="homteach">версия для учителей</Button>
			<br/>
			<Button stretched size="l" mode="secondary"  onClick={go} data-to="homparent">версия для родителей</Button>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
