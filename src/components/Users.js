import React, { Component } from 'react';
import UserItem from './UserItem';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: '63642406ac82668f9f372452',
          name: 'Gertrude',
          surname: 'Fields',
          workdays: 24,
          wagePerDay: '$46',
        },
        {
          id: '6364240665efc80a3de0609a',
          name: 'Chavez',
          surname: 'Flowers',
          workdays: 25,
          wagePerDay: '$47',
        },
        {
          id: '636424068c8a578db2b8d14a',
          name: 'Denise',
          surname: 'Morrison',
          workdays: 23,
          wagePerDay: '$23',
        },
        {
          id: '6364240611508d0418f50f19',
          name: 'Wall',
          surname: 'Butler',
          workdays: 27,
          wagePerDay: '$31',
        },
        {
          id: '63642406e2e7687a369af4d0',
          name: 'Kitty',
          surname: 'Reilly',
          workdays: 22,
          wagePerDay: '$30',
        },
        {
          id: '63642406445501941d0aee41',
          name: 'Perry',
          surname: 'Lane',
          workdays: 26,
          wagePerDay: '$28',
        },
        {
          id: '63642406fa52212ccd9d7c10',
          name: 'Tabitha',
          surname: 'Buck',
          workdays: 26,
          wagePerDay: '$21',
        },
        {
          id: '63642406b93dab9baaacbfc6',
          name: 'Shaw',
          surname: 'Emerson',
          workdays: 24,
          wagePerDay: '$48',
        },
        {
          id: '63642406b4fc630472334285',
          name: 'Lloyd',
          surname: 'Gilmore',
          workdays: 21,
          wagePerDay: '$50',
        },
      ],
    };
  }

  render() {
    return (
      <div className="table">
        <UserItem />
        {this.state.employees.map((employee) => {
          return <UserItem employees={employee} key={employee.id} />;
        })}
      </div>
    );
  }
}
