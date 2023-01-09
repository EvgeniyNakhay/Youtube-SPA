import {Layout, List, Typography  } from 'antd';
import React, {useState} from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import './style.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import {useDispatch, useSelector} from "react-redux";
const { Content} = Layout;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const FavouriteItem = () => {
  
  const handleExecute = () => {
    setQueryName(nameF);
    setMaxResults(maxResultsF);
    setSortBy(sortByF);
  };

  const handleEdit = () => {
    setQueryNameF(nameF);
    setMaxResultsF(maxResultsF);
    setSortByF(sortByF);
  };

  const handleDelete = () => {
    deleteQueryInF(id);
  }

  return <>
  <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
};

export default Favourites;