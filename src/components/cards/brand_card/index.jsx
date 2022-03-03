import { Button, Card, Container, Grid, Text } from "@nextui-org/react";

export default function BrandCard({ name, description, logo }) {
  return (
    <>
      <Grid.Container justify="center">
        <Card style={{ maxWidth: 350, margin: 10 }} shadow={false}>
          <Card.Body style={{paddingTop: 20}}>
            <Card.Image
              objectFit='contain'
              src={logo}
              width='100%'
              height={150}
            />
            <Container
              fluid
              style={{ paddingInline: 0, marginInline: 0, paddingTop: 30 }}>
              <Text size={20} style={{ fontWeight: "bold", marginBottom: 10 }}>
                {name}
              </Text>
              <Text>{description}</Text>
            </Container>
          </Card.Body>
          <Card.Footer style={{ paddingBottom: 30 }}>
            <Button
              size='sm'
              style={{
                padding: 20,
                width: "55px",
                backgroundColor: "$custom_blue",
              }}>
              Shop
            </Button>
          </Card.Footer>
        </Card>
      </Grid.Container>
    </>
  );
}
