import AllMenuBYUser from "@/components/AllMenuBYUser";
import SpecialMenu from "@/components/SpecialMenu";
import WraperCost from "@/components/WraperCost";


export default async  function Page({ params }) {
  const { storeId } = await params; 
  const id = storeId;

  return (
    <div className="max-w-7xl mx-auto px-1">
      <WraperCost id={id}/>
    </div>
  );
}
