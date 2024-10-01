import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-3">
      <div className="flex gap-3">
        <p>Product</p>
        <p>About Us</p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" size="sm">
          Login
        </Button>
        <Button>Register</Button>
      </div>
    </nav>
  );
}

export default Navbar;
