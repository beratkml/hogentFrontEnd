import { Alert,AlertIcon,AlertTitle,AlertDescription } from "@chakra-ui/react";

export default function Error({ error }) {
  if (error) {
    return (
      <>
      <Alert status='error'>
      <AlertIcon />
      <AlertTitle>An error occured</AlertTitle>
      <AlertDescription>{error.message || JSON.stringify(error)}</AlertDescription>
    </Alert>
      </>
    );
  }
  return null;
}