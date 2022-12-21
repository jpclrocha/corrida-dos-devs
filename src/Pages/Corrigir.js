import AdminMenu from "../Components/Adm/AdminMenu";
import CorrigirModal from "../Components/Adm/Corrigir/CorrigirModal";
import FaixaCorrigir from "../Components/Adm/Corrigir/FaixaCorrigir";

export default function Corrigir() {
  return (
    <>
      <AdminMenu />
      <FaixaCorrigir />
      <CorrigirModal/>
    </>
  );
}
