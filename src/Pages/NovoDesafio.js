import AdminMenu from "../Components/Adm/AdminMenu";
import FaixaDesafio from "../Components/Adm/NewDesafio/FaixaDesafio";
import NovoDesafioModal from "../Components/Adm/NewDesafio/NovoDesafioModal";

export default function NewDesafio() {
  return (
    <>
      <AdminMenu />
      <FaixaDesafio />
      <NovoDesafioModal/>
    </>
  );
}
