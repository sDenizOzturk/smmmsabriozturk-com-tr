import React, { useState } from "react";
import { Box, Grid, Dialog } from "@mui/material";
import Style from "./Office.module.scss";
import SocialIcon from "../home/SocialIcon";
import { info } from "../../info/Info";

export default function Office({ innerRef }) {
  const office = info.office;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (src) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box id={"office"} ref={innerRef} className={Style.page}>
      {/* Map */}
      <Box className={Style.mapWrapper}>
        <iframe
          src={office.map.src}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={office.map.title}
        ></iframe>
      </Box>

      {/* Contact */}
      <Box className={Style.contactSection}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <h3>Adres</h3>
            {office.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <h3>Çalışma Saatleri</h3>
            {office.workingHours.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </Grid>

          <Grid item xs={12} md={4} className={Style.icons}>
            <h3>İletişim</h3>
            <Box className={Style.iconRow}>
              {office.socials.map((social, index) => (
                <SocialIcon
                  key={index}
                  link={social.link}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Images */}
      <Box className={Style.officeGallery}>
        <Grid container spacing={3} justifyContent="center">
          {office.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className={Style.card} onClick={() => handleOpen(image)}>
                <img src={image} alt={`Ofis Görseli ${index + 1}`} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <img
          src={selectedImage}
          alt="Ofis Görseli"
          className={Style.modalImage}
        />
      </Dialog>
    </Box>
  );
}
