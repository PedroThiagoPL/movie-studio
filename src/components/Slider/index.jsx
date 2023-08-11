import * as C from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import Cards from '../Cards'

function Slider ({info, title}) {
    return (
        <>
            <C.Container>
                <h2>{title}</h2>
                <Swiper
                    grabCursor
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    className='swiper'
                >
                    {info.map((item, index) => (
                        <SwiperSlide key={index}>
                           <Cards item={item}/>
                        </SwiperSlide>
                ))}
                    
                </Swiper>

            </C.Container>
        </>
    )
}

Slider.propTypes = {
    info: PropTypes.string.isRequired
}

Slider.propTypes = {
    title: PropTypes.string.isRequired
}

export default Slider

