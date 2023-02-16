import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Container from "@mui/material/Container";

const itemData = [
  {
    img:
      "https://i.pinimg.com/474x/c7/6e/bc/c76ebc3a9bbce6c6f5e9358bc677a3f9.jpg",
    title: "Bed"
  },
  {
    img:
      "https://i.pinimg.com/474x/3b/d7/ab/3bd7ab6e6c5ca217c7b0c45d5ea872e3.jpg",
    title: "Books"
  },
  {
    img:
      "https://i.pinimg.com/474x/69/09/56/690956812fce54eb015aabf15b208f1e.jpg",
    title: "Sink"
  },
  {
    img:
      "https://i.pinimg.com/474x/22/bb/6b/22bb6bbf907d0869fefe0c7e0a176f35.jpg",
    title: "Blinds"
  },
  {
    img:
      "https://i.pinimg.com/474x/b8/20/6f/b8206fe84abc928d352b9641871fa4f6.jpg",
    title: "Chairs"
  },
  {
    img:
      "https://i.pinimg.com/474x/31/24/e7/3124e7c25d0cf09c60992340b2270b85.jpg",
    title: "Laptop"
  },
  {
    img:
      "https://i.pinimg.com/474x/f3/cc/fd/f3ccfd3cfb90067ba0fdf5ad36d594f2.jpg",
    title: "Doors"
  },
  {
    img:
      "https://i.pinimg.com/474x/86/ac/97/86ac978b2ac2d501205ca8b588dc37ff.jpg",
    title: "Coffee"
  },
  {
    img:
      "https://i.pinimg.com/474x/7c/08/8c/7c088cbb53279a54389dd5895bac8ee7.jpg",
    title: "Storage"
  },
  {
    img:
      "https://i.pinimg.com/474x/56/6d/de/566dde601b87491caf18ec7a43ee5282.jpg",
    title: "Candle"
  },
  {
    img:
      "https://i.pinimg.com/474x/7f/05/0e/7f050e3350944d1e3b0b310d82ed6031.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/c6/de/e2/c6dee25fa2cabb0723aa07360958b9b2.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/a0/6b/07/a06b07f0913a3cb024f28268605972f9.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/36/08/b2/3608b2c40d1ab16c5a22b2097d6b2b77.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/8f/62/82/8f62820a6f8b1ee34f91e576bb088b63.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/b8/d5/ed/b8d5edf7690b9e89374fd7d2cc102ca3.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/00/66/75/006675167a83e13392fde4c218d66fdb.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/aa/83/85/aa8385f511ea5d433611b6a8e172ebf7.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/e3/24/13/e32413ba9fa7e6fc00adca9d17564b8f.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/39/e0/f5/39e0f59ecd59c931617ff9231c90df7d.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/b7/81/13/b78113a0d2ccb43cb8fb211ed3fd1bba.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/ac/96/20/ac9620f61bdf6393e81eee9b2f1c4ff5.jpg",
    title: "Coffee table"
  },
  {
    img:
      "https://i.pinimg.com/474x/31/07/c7/3107c7de9d122e99ceadd91564b27d3f.jpg",
    title: "Coffee table"
  }
];

export default function App() {
  return (
    <Container>
      <h1>Kurta's</h1>
      <Box sx={{ width: "auto", height: "auto" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              {/* <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}

                  /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}