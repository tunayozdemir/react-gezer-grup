/*eslint-disable*/
import React, { useState } from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { RadioButton, AntdSelect, UploadImage } from '../../components'
import arrow from '../../assets/icons/right-arrow.png'

const genderDb = [
  { id: 0, value: 0, label: 'Erkek' },
  { id: 1, value: 1, label: 'Kadın' },
  { id: 2, value: 2, label: 'Belirtilmemiş' }
]

const maritalStatus = [
  { id: 0, value: 0, label: 'Evli' },
  { id: 1, value: 1, label: 'Bekar' },
  { id: 2, value: 2, label: 'Belirtilmemiş' }
]

const smoking = [
  { id: 0, value: 0, label: 'Evet' },
  { id: 1, value: 1, label: 'Hayır' },
]

const countries = [
  { id: 0, value: 1, label: 'Türkiye' },
  { id: 1, value: 2, label: 'ABD' },
  { id: 2, value: 3, label: 'Fransa' },
  { id: 3, value: 4, label: 'Italya' },
]
const militaryServiceStatus = [
  { id: 0, value: 0, label: 'Yaptı' },
  { id: 1, value: 1, label: 'Yapmadı' },
  { id: 2, value: 2, label: 'Muaf' },
  { id: 3, value: 3, label: 'Belirtmemiş' },
]

const drivingLicence = [
  { id: 0, value: 0, label: 'Var' },
  { id: 1, value: 1, label: 'Yok' },
]

const drivingLicenseClass = [
  { id: 0, value: 0, label: 'M' },
  { id: 1, value: 1, label: 'A1' },
  { id: 2, value: 2, label: 'A2' },
  { id: 3, value: 3, label: 'A' },
  { id: 4, value: 4, label: 'B1' },
  { id: 5, value: 5, label: 'B' },
  { id: 6, value: 6, label: 'C1' },
  { id: 7, value: 7, label: 'C' },
  { id: 8, value: 8, label: 'D1' },
  { id: 9, value: 9, label: 'D' },
]

const srcCertificate = [
  { id: 0, value: 0, label: 'SRC 1' },
  { id: 1, value: 1, label: 'SRC 2' },
  { id: 2, value: 2, label: 'SRC 3' },
  { id: 3, value: 3, label: 'SRC 4' },
  { id: 4, value: 4, label: 'SRC 5 (ADR)' },
]

const physicalDisability = [
  { id: 0, value: 0, label: 'Var' },
  { id: 1, value: 1, label: 'Yok' },
]

const obstacleCategory = [
  { id: 0, value: 0, label: 'Seçiniz' },
  { id: 1, value: 1, label: 'Damar Hastalıkları' },
  { id: 2, value: 2, label: 'Endokrin ve Metebolizma Hastalıkları' },
  { id: 3, value: 3, label: 'Gögüs Hastalıkları' },
  { id: 4, value: 4, label: 'Göz Arıları' },
  { id: 5, value: 5, label: 'Hematolojik Hastalıklar' },
  { id: 6, value: 6, label: 'İç Hastalıklar' },
  { id: 7, value: 7, label: 'Karın Hastalık ve Arızaları' },
  { id: 8, value: 8, label: 'Sindirim Sitemi ve Arızaları' },
  { id: 9, value: 9, label: 'Üroloji' },
  { id: 9, value: 9, label: 'Yanıklar' },
]
const { TextArea } = Input;

const AntdForm = () => {

  const [day] = useState([])
  const [moon] = useState([
    { id: 0, value: 0, label: 'Ocak', value: 'ocak', },
    { id: 1, value: 1, label: 'Şubat', value: 'subat', },
    { id: 2, value: 2, label: 'Mart', value: 'mart', },
    { id: 3, value: 3, label: 'Nisan', value: 'nisan', },
    { id: 4, value: 4, label: 'Mayıs', value: 'mayıs', },
    { id: 5, value: 5, label: 'Haziran', value: 'haziran' },
    { id: 6, value: 6, label: 'Temmuz', value: 'temmuz', },
    { id: 7, value: 7, label: 'Ağustos', value: 'ağustos' },
    { id: 8, value: 8, label: 'Eylül', value: 'eylül', },
    { id: 9, value: 9, label: 'Ekim', value: 'ekim', },
    { id: 10, value: 10, label: 'Kasım', value: 'kasım', },
    { id: 11, value: 11, label: 'Aralık', value: 'aralık', },
  ])
  const [year] = useState([])
  const [obstaclePercentage] = useState([])

  for (let i = 1; i < 32; i++) {
    day.push({
      key: i,
      value: i,
    });
  }
  for (let i = 1954; i < 2009; i++) {
    year.push({
      key: i,
      value: i,
    });
  }
  for (let i = 5; i < 100; i++) {
    obstaclePercentage.push({
      key: i,
      value: `${'%' + i}`,
    });
  }

  const onFinish = (values) => {
    console.log('values :', values)
  }

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
    >
      <Row gutter={[20, 0]} >
        <Form.Item
          noStyle
          shouldUpdate
          label='test'
        >
          {({ getFieldValue }) =>
            <Row gutter={[20, 0]} >
              <Col span={24}>
                <Form.Item name={'profile'} noStyle>
                  <UploadImage />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='Adınız' name={'fisrtName'} rules={[{ required: true, },]} initialValue={'Habip'}>
                  <Input
                    className='input-custom'
                    placeholder=''
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='Soyadınız' name={'lastName'} rules={[{ required: true, },]} initialValue={'AGCA'}>
                  <Input className='input-custom' placeholder='' allowClear />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='T.C. Kimlik Numarası' name={'tckn'}>
                  <Input className='input-custom' placeholder='Zorunlu Değil' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='Cinsiyetiniz' name={'yourGender'} rules={[{ required: true, },]}>
                  <RadioButton options={genderDb} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='Medeni Hal' name={'maritalStatus'} rules={[{ required: true, },]}>
                  <RadioButton options={maritalStatus} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='Sigara Kullanıyor Musunuz?' name={'smoking'} rules={[{ required: true, },]}>
                  <RadioButton options={smoking} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Row gutter={[20, 0]} className='date-select'>
                  <Col xs={8} sm={8} md={8} lg={6}>
                    <Form.Item label='Doğum Tarihi' name={'day'} rules={[{ required: true, },]} initialValue={'1'}>
                      <AntdSelect options={day} />
                    </Form.Item>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={6}>
                    <Form.Item label=' ' name={'moon'} rules={[{ required: true, },]} initialValue={'Ocak'}>
                      <AntdSelect options={moon} />
                    </Form.Item>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={6}>
                    <Form.Item label=' ' name={'year'} rules={[{ required: true, },]} initialValue={'1960'}>
                      <AntdSelect options={year} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label='Uyruk' name={'countries'} rules={[{ required: true, },]} initialValue={'Türkiye'}>
                  <AntdSelect options={countries} />
                </Form.Item>
              </Col>
              {
                getFieldValue('yourGender') === 0 || getFieldValue('yourGender') === '' ?
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item label='Askerlik Durumu' name={'militaryServiceStatus'} rules={[{ required: true, },]}>
                      <RadioButton options={militaryServiceStatus} />
                    </Form.Item>
                  </Col> : null
              }
              <Col xs={24} sm={8} md={8} lg={getFieldValue('drivingLicence') === 0 ? 8 : 24}>
                <Form.Item label='Ehliyetiniz Var Mı?' name={'drivingLicence'} >
                  <RadioButton options={drivingLicence} />
                </Form.Item>
              </Col>
              {
                getFieldValue('drivingLicence') === 0 &&
                <>
                  <Col xs={24} sm={24} md={8} lg={8}>
                    <Form.Item label='Ehliyet Sınıfınız' name={'drivingLicenseClass'} rules={[{ required: true, },]} initialValue={'M'}>
                      <AntdSelect options={drivingLicenseClass} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={8}>
                    <Form.Item label='Varsa SRC Belgeniz' name={'srcCertificate'}>
                      <AntdSelect placeholder='Seçiniz' options={srcCertificate} />
                    </Form.Item>
                  </Col>
                </>
              }

              <Col xs={24} sm={24} md={8} lg={8}>
                <Form.Item label='Bedensel Engeliniz Var Mı?' name={'physicalDisability'} >
                  <RadioButton options={physicalDisability} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <Form.Item label='Engel Kategoris' name={'obstacleCategory'} rules={[{ required: true, },]} initialValue={'Ruh Hastalıkları'}>
                  <AntdSelect options={obstacleCategory} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <Form.Item label='Engel Yüzdesi' name={'obstaclePercentage'}>
                  <AntdSelect placeholder='Seçiniz' options={obstaclePercentage} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label='Engelinizin Detayı' name={'detailsOfYourDisability'} rules={[{ required: true, },]} initialValue={'gnnnn'} >
                  <TextArea
                    placeholder='gnnnn'
                    // autoSize={{ minRows: 6, maxRows: 5, }} 
                    rows={6}
                  />
                </Form.Item>
              </Col>
            </Row>
          }
        </Form.Item>
        <Col span={24}>
          <Row gutter={[20, 0]} justify={'end'}>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">Kaydet ve Devam Et <i><img src={arrow} title='arrow' /></i></Button>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default AntdForm