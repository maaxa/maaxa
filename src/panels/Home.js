import React from 'react';
import { Panel, PanelHeader, Button, Group, Div,HorizontalScroll,Avatar,Cell} from '@vkontakte/vkui'
//import PropTypes from 'prop-types';
//import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
//import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
//import Button from '@vkontakte/vkui/dist/components/Button/Button';
//import Group from '@vkontakte/vkui/dist/components/Group/Group';
//import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
//import Div from '@vkontakte/vkui/dist/components/Div/Div';
//import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
	//import Icon24Back from '@vkontakte/icons/dist/24/back';
//import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
	//import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
	//import Icon24Search from '@vkontakte/icons/dist/24/search'


//const osname = platform();


const Home = ({ id, go, fetchedUser }) => (




	<Panel id={id}>
		<PanelHeader>Мое приложение</PanelHeader>
		
		<Group style={{ paddingBottom: 8 }}>
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <div >
               <Button level="outline">пицца d30 см</Button>
            </div>
            <div >
              <Button level="outline">пицца d40 см</Button>
            </div>
            <div >
               <Button level="outline">подарочные карты</Button>
            </div>
            <div >
               <Button level="outline">пироги до 1600</Button>
            </div>
            <div >
               <Button level="outline">суши и роллы</Button>
            </div>
            <div >
              <Button level="outline">бургеры</Button>
            </div>
            <div >
              <Button level="outline">горячие блюда</Button>
            </div>
            <div >
              Вадим
            </div>
          </div>
        </HorizontalScroll>
      </Group>
		
		{fetchedUser &&
		<Group title="пользователь вк">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name} ${fetchedUser.bdate}`}
				{`${fetchedUser.phone_number}`}
				
				
			</Cell>
		</Group>}
			
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Покажите мне персика, пожалуйста
				</Button>
			</Div>
		</Group>
		
		
		
	</Panel>
	
	
);

/*Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		phone_number: PropTypes.string,
		bdate: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};*/





export default Home;
