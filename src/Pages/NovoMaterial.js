import AdminMenu from "../Components/Adm/AdminMenu";
import FaixaMaterial from "../Components/Adm/NewMaterial/FaixaMaterial";
import NovoMaterialModal from "../Components/Adm/NewMaterial/NovoMaterialModal";

export default function NewMaterial() {
  return (
    <>
      <AdminMenu />
      <FaixaMaterial />
      <NovoMaterialModal />
    </>
  );
}
