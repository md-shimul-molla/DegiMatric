import ProductItemList from "@/app/Components/Pages/Products/ProductDetails/OurServices/ProductItemList"
import ProductDetailsBanner from "@/app/Components/Pages/Products/ProductDetails/ProductDetailsBanner"


const page = () => {
  return (
    <div className="pt-24">
    <ProductDetailsBanner></ProductDetailsBanner>
    <ProductItemList></ProductItemList>
    </div>
  )
}

export default page