import React from 'react';
import './Header.css';
import 'semantic-ui-css/semantic.min.css'
import {Icon, Search} from 'semantic-ui-react';

class Header extends React.Component
{
    render(){
        const {  handleTabChange, isActive }= this.props;
        return  ( 
            <div className="headNav">
                <div className="header">
                    <div className="headLeft">
                        <div className="ticketHead">Tickets</div>
                        <div className="headerButtons">
                            <button onClick={() => { handleTabChange('1'); }} className={`${isActive === '1' ? 'allActivated' : ''} button`}>ALL</button>
                    <button onClick={() => { handleTabChange('2'); }} className={`${isActive === '2' ? 'allActivated' : ''} button`}>ONLY MY TICKETS</button>
                    <button onClick={() => { handleTabChange('3'); }} className={`${isActive === '3' ? 'allActivated' : ''} button`}>RECENTLY UPDATED</button>
                        </div>
                        <button className="button"><Icon name="filter"></Icon></button>
                        <button className="button"><Icon name="refresh"></Icon></button>
                    </div>
                    <div className="headerRight">
                        <Search
                            fluid
                            placeholder="SEARCH"
                        />
                        <button className="button"><Icon name="setting"></Icon> Configurations</button>
                        <div className="datacount">(0-30)</div>
                        <button className="button"><Icon name="angle left"></Icon></button>
                        <button className="button"><Icon name="angle right"></Icon></button>
                    </div>

                </div>
            </div>   
       );
    }
}
export default Header;
