import {
  Button,
  Container,
  Group,
  Image,
  List,
  Overlay,
  Text,
  ThemeIcon,
  Title,
  rem,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
// import image from './image.svg'
import classes from './index.module.css'
import clsx from 'clsx'

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI code reviews for{' '}
          <Text component="span" inherit className={classes.highlight}>
            any stack
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button
            className={clsx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button>
        </div>
      </div>
    </div>
  )
}
