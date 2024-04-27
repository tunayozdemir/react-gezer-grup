import React from 'react'
import { Form, FormGroup, Row, Col, Button, } from 'reactstrap';
import { Input, RadioButton } from '../../components'

import './FormComponent.scss'

const genderDb = [
  { id: 0, value: 0, label: 'Erkek' },
  { id: 1, value: 1, label: 'Kadın' },
  { id: 2, value: 2, label: 'Belirtilmemiş' }
]

const maritalStatus = [
  { id: 0, value: 0, label: 'Erkek' },
  { id: 1, value: 1, label: 'Kadın' },
  { id: 2, value: 2, label: 'Belirtilmemiş' }
]

const FormComponent = () => {


  const handleRadioChange = (value) => {
    console.log('handleRadioChange :', value)
  }

  return (
    <div className='from'>
      <Form>
        <Row>
          <Col xl='6'>
            <FormGroup>
              <Input id="fristName" name="fristname" type="search" label={'Adınız*'} />
            </FormGroup>
          </Col>
          <Col xl='6'>
            <FormGroup>
              <Input id="lastName" name="lastname" type="text" label={'Soyadınız*'} />
            </FormGroup>
          </Col>
          <Col xl='6' >
            <FormGroup>
              <Input id="tc" name="tckn" type="number" label={'T.C. Kimlik Numarası*'} />
            </FormGroup>
          </Col>
          <Col xl='6' >
            <FormGroup>
              <RadioButton options={genderDb} onChange={handleRadioChange} label={'Cinsiyetiniz*'} />
            </FormGroup>
          </Col>
          <Col xl='6' >
            <FormGroup>
              <RadioButton options={maritalStatus} onChange={handleRadioChange} label={'Medeni Hal*'} />
            </FormGroup>
          </Col>
          <Col xl='6' >
            <FormGroup>
              <RadioButton options={genderDb} onChange={handleRadioChange} label={'Sigara Kullanıyor Musunuz?*'} />
            </FormGroup>
          </Col>
          <Button>Gönder</Button>
        </Row>
      </Form>
    </div>
  )
}

export default FormComponent