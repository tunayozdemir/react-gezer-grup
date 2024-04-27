import React from 'react'
import deleteIcon from '../../assets/icons/trash.png'

import './UploadImage.scss'

const UploadImage = () => {
  return (
    <div className='upload-image__wrap'>

      <div className='upload-image'>
        <img title='Profile' src='https://isbull.s3.eu-north-1.amazonaws.com/default-images/user-profile.png?v=2.9.90' />
        <a href="#" className='upload-image__delete-btn' data-alert-text="Profil fotoğrafını kaldırmak CV puanını %10 düşürecektir. Emin misiniz?">
          <img src={deleteIcon} title="Delete" />
        </a>
      </div>
    </div>
  )
}

export default UploadImage