import React from "react";
import { Box, Typography } from "@material-ui/core";
import {Helmet} from 'react-helmet'
import icon from '../../assets/1.svg'
import iconn from '../../assets/2.svg'
import iconnn from '../../assets/3.svg'

function Info(props) {
  return (
    // <Box>
    //   <Typography>
    //     Общий отдел 364024, г. Грозный, ул. А. Шерипова, 32 +7 (8712) 29-48-32
    //     mail@chesu.ru
    //   </Typography>
    //   <Typography>
    //     Приемная комиссия 364060, г. Грозный, ул. Киевская, 33 +7 (8712)
    //     21-20-04 pk@chesu.ruг.Грозный, ул.Трошева, 7
    //   </Typography>
    //   <Typography>
    //     Приемная ректора 364024, г. Грозный, ул. А. Шерипова, 32 +7 (8712)
    //     29-00-04 z.saidov@chesu.ru
    //   </Typography>
    //   <Typography>
    //     Вопросы оплаты труда +7 (8712) 29-49-93 rayasalajieva@yandex.ru
    //   </Typography>
    //   <Helmet>
    //     <meta charSet="utf-8" />
    //     <title>О нас</title>
    //     <link rel="canonical" href="http://localhost:3000/" />
    //   </Helmet>
    // </Box>
      <div className="container wider">
        <div className="row" style={{marginTop: 60, height: 400}}>
          <div className="col-12 col-md-4 text-center">
            <div className="for-who-img">
              <img src={icon} alt="icon" width='200px'/>
            </div>
            <div className="for-who-caption" style={{marginTop: 30}}>
              <h5>
                Новичкам
              </h5>
            </div>
            <div className="for-who-description">
              Возможно, у тебя нет никаких базовых знаний. Это и не важно. Мы учим с нуля.
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="for-who-img d-flex justify-content-center">
              <img src={iconnn} alt="icon" width="140px"/>
            </div>
            <div className="for-who-caption" style={{marginTop: 26}}>
              <h5>
                Студентам
              </h5>
            </div>
            <div className="for-who-description">
              Без информатики никуда, а на скучных парах ничему не научишься. Нужен новый подход.
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="for-who-img">
              <img src={iconn} alt="icon" height="170px"/>
            </div>
            <div className="for-who-caption" style={{marginTop: 11}}>
              <h5>
                Владельцам бизнеса
              </h5>
            </div>
            <div className="for-who-description">
              Два месяца уроков и у твоего бизнеса будет новый сайт. Возможно интернет-магазин.
            </div>
          </div>
        </div>
      </div>
  );
}

export default Info;
