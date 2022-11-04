import React, { Component } from 'react';

export default class UserItem extends Component {
  render() {
    const { name, surname, workdays, wagePerDay } = this.props.employees || {};
    return (
      <div
        className={Object.entries(this.props).length === 0 ? 'row head' : 'row'}
      >
        <div className="col">{name ? name : 'Name'}</div>
        <div className="col">{surname ? surname : 'Surname'}</div>
        <div className="col">{workdays ? workdays : 'Workdays'}</div>
        <div className="col">{wagePerDay ? wagePerDay : 'Wage per day'}</div>
      </div>
    );
  }
}
