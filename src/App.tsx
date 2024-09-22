import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button, Container, Input, Link, Slider, Typography } from '@mui/material';
import ProTip from "./ProTip";

type Inputs = {
  example: string,
  exampleRequired: string,
}

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example in TypeScript
        </Typography>
      <HomeIcon color="secondary"/>
        <AccessAlarmIcon color="secondary" />
        <Slider defaultValue={30} sx={{
          width: 300,
          color: 'success.main',
          '& .MuiSlider-thumb': {
            borderRadius: '1px',
          }
        }} />
      {/** "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <Button variant="contained">
          <Input type="submit" />
        </Button>
      </form>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
