import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Button
      type="button"
      className="btn btn-danger"
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </Button>
  );
}

export default LogoutButton;
