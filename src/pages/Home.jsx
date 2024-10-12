import PurchasePopup from "../components/purchase/PurchasePopup";

function Home() {
  const cartItems = [
    {
      id: 1,
      title: "La Casa Neville 2: No Quieras Nada Vil",
      author: "Marcela G. Radice",
      price: 8000,
      quantity: 1,
      imageUrl:
        "https://www.libreriadonquijote.com.ar/uploads/productos/2023/06/20230606161802-neville-2.jpg",
    },
    {
      id: 2,
      title: "Otro Libro Ejemplo",
      author: "Autor Ejemplo",
      price: 5000,
      quantity: 2,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const handleCheckout = (orderDetails) => {
    console.log("Compra confirmada:", orderDetails);
    // Aquí puedes agregar la lógica para procesar la compra (enviar a un API, etc.)
  };
  return (
    <div className="p-12 text-5xl text-white">
      <PurchasePopup cartItems={cartItems} onCheckout={handleCheckout} />
      Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet
      impedit tempora incidunt, inventore ipsam ratione, nemo laborum,
      consectetur doloremque ullam. Consequuntur in id nostrum fuga quia error
      dignissimos aliquam! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Sequi alias iure excepturi unde! At, ipsa adipisci? Ab iusto commodi
      unde, eveniet necessitatibus consectetur cupiditate enim harum rerum,
      facere saepe ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Omnis laudantium nulla aperiam aspernatur quam vel praesentium quas
      pariatur similique, sit esse perspiciatis blanditiis ex provident
      molestias. Eius, obcaecati. Dolorem, Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Cum atque quo perspiciatis unde quia? Beatae
      consequatur minima labore eius magnam eum nesciunt blanditiis ducimus,
      atque praesentium voluptatem. Debitis, quas fugit? Rem asperiores eaque,
      quasi reiciendis iusto, sapiente obcaecati cupiditate perferendis eveniet
      praesentium corrupti aut. Quam est iste culpa, animi odio quidem fuga.
      Tempora tempore sint quidem debitis eaque temporibus itaque! Quod deserunt
      natus quos, quasi, tempora dolorum accusantium amet quaerat voluptate
      maxime, repellendus alias corrupti eligendi vitae eos ipsam exercitationem
      at consequatur nulla ullam beatae laborum debitis. Laudantium, sunt
      explicabo? Illum debitis culpa minus placeat, unde atque necessitatibus
      eligendi doloremque totam quos fugit obcaecati excepturi praesentium.
      Voluptate cumque tenetur, officiis, libero blanditiis similique doloribus
      consectetur vitae odit quaerat delectus suscipit. Maxime voluptates
      adipisci tempore autem nihil, aspernatur aliquid, nostrum ipsam quis
      eveniet voluptatum commodi sit! Odit nesciunt rerum rem, molestiae sequi
      quidem porro dolor commodi nobis repudiandae sunt nostrum beatae.
    </div>
  );
}

export default Home;
