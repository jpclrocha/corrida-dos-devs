import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Redes() {
  return (
    <div className="bg-branco w-[60vw] h-fit rounded-xl py-5 px-10 my-5 shadow-2xl">
      <h1 className="font-extrabold text-2xl">Minhas Redes</h1>
      <ul className="text-xl">
        <li className="inline-flex text-2xl">
          <FaInstagram size="2rem" />
          <FaTwitter size="2rem" /> <FaTiktok size="2rem" /> @jpclrocha
        </li>
      </ul>
    </div>
  );
}
