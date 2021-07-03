import React from "react";
import { Box, Typography } from "@material-ui/core";

function Info(props) {
  return (
    <Box>
      <Typography>
        Общий отдел 364024, г. Грозный, ул. А. Шерипова, 32 +7 (8712) 29-48-32
        mail@chesu.ru
      </Typography>
      <Typography>
        Приемная комиссия 364060, г. Грозный, ул. Киевская, 33 +7 (8712)
        21-20-04 pk@chesu.ruг.Грозный, ул.Трошева, 7
      </Typography>
      <Typography>
        Приемная ректора 364024, г. Грозный, ул. А. Шерипова, 32 +7 (8712)
        29-00-04 z.saidov@chesu.ru
      </Typography>
      <Typography>
        Вопросы оплаты труда +7 (8712) 29-49-93 rayasalajieva@yandex.ru
      </Typography>
    </Box>
  );
}

export default Info;
