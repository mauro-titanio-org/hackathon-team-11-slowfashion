import { Button, Grid } from "@nextui-org/react";
import Logo from "../../assets/svg/Logo";
import SearchIcon from "../../assets/svg/SearchIcon";

export default function Navbar() {
  return (
    <>
      <Grid.Container style={{ position: "fixed", backgroundColor: "black", zIndex: 5000 }}>
        <Grid xs={10} style={{ paddingLeft: 25, paddingBottom: 12 }}>
          <Logo />
        </Grid>
        <Grid xs={2} justify='center' alignItems='center'>
          <SearchIcon  />
          <Button size="sm" bordered color='secondary' style={{marginLeft: 12}}>
            Suscribe
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}
