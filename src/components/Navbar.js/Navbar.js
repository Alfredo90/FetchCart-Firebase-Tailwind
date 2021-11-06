import { ReactComponent as Cart} from "../../assets/cart.svg"

const Navbar = () => {
  const navLinks = [
    { title: <button>Pet Food</button> },
    { title: <button>Pet Toys</button>  },
    { title: <button>Login</button>  },
    {title: <button><Cart/></button>}
    
  ];

  return (
    <div className="flex justify-between items-center  p-10 border-2  shadow">
      <div className="text-30 ml-20 ">
        <h1 >Fetch Cart</h1>
      </div>
      <div >
        <ul className="flex justify-around items-center space-x-40 mr-20  text-20 ">
          {navLinks.map(({ title }) => (
            <li className="flex">{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
