
import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
};

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);

  }

  return (
    // vw = viewport width
    // vh = viewport height
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bgColor="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register('email')}
            error={formState.errors.email}
          />
          <Input 
            type="password" 
            name="password" 
            label="Senha" 
            {...register('password')}
            error={formState.errors.password}
             />

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >Entrar</Button>
        </Stack>
      </Flex>

    </Flex>
  )
}
