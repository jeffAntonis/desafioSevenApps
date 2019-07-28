import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Container } from './styles';
import Header from '~/components/Header';
import TopMovie from '~/components/TopMovie';
import List from '~/components/List';

import { requestTodoList } from "~/store/ducks/todo";

export default function Main(props) {  
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTodoList());
  }, []);

  return (
    <>
      <Header />
      <Container>
        { 
          (todo.requestSucess) && 
          <>
            <TopMovie data={todo.data} navigation={props.navigation} />
            <List data={todo.data} navigation={props.navigation} /> 
          </>
        }
      </Container>
    </>
  );
}