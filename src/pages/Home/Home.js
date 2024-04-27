import React from 'react'
// import PropTypes from "prop-types";
import { Row, Col } from 'reactstrap';
import { Header, Content, Wrapper, AntdForm } from '../../components'

import './Home.scss'

const Home = () => {

  return (
    <div className='home-page'>
      <Content>
        <Header title='Kişisel Bilgiler' />
        <Wrapper>
          <AntdForm />
        </Wrapper>
      </Content>
    </div>

  )
}

export default Home