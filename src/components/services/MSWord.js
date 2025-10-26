import React from "react";
import Style from "./MSWord.module.scss";
import { Box } from "@mui/material";

function MSWord({ services }) {
  return (
    <Box className={Style.document}>
      <Box className={Style.header}>
        <Box className={Style.dots}>
          <span className={`${Style.dot} ${Style.red}`} />
          <span className={`${Style.dot} ${Style.amber}`} />
          <span className={`${Style.dot} ${Style.green}`} />
        </Box>
        <span className={Style.fileName}>Hizmetler – Word Dosyası</span>
      </Box>

      <Box className={Style.content}>
        <h2>Sunduğumuz Hizmetler</h2>
        {services.map((service, index) => (
          <>
            <h3>{`${index + 1}. ${service.name}`}</h3>
            <p>{service.details}</p>
          </>
        ))}
      </Box>

      <Box className={Style.footer}>Sayfa 1/1 - Hizmetler.docx</Box>
    </Box>
  );
}

export default MSWord;
