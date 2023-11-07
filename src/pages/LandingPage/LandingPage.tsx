import logo from "../../assets/logoJCDVPNG.png"


function LandingPage() {
  return (
    <header className="flex flex-col h-screen w-screen justify-start items-center ">
      
      <nav className="area h-20 flex justify-between items-center text-gray-800 ">

          <picture className="flex justify-center items-center max-w-[100px] min-h-[80%">
            <img src={logo} alt="Jesus Camino de Vida" className="w-[65%]" />
          </picture>

          <ul className="hidden justify-around items-center font-bold w-[35%] sm:flex ">
            <li className="hover:text-blue-light transitionColor">
              <a href="#">Ministerios</a>
            </li>
            <li className="hover:text-blue-light transitionColor">
              <a href="#">Pastores</a>
            </li>
            <li className="hover:text-blue-light transitionColor">
              <a href="#">Horarios</a>
            </li>
          </ul>

      </nav>

      <section className="area flex flex-row justify-between py-28">

        <article className="w-[40%]">
          <h1 className="text-6xl font-black py-5">Congregate</h1>
          <p className="font-regular">Bienvenidos a nuestra comunidad de fe, un lugar donde la gracia y el amor de Cristo se manifiestan en cada rincón. En nuestra iglesia evangélica, creemos que la fe en Jesucristo es la fuente de toda esperanza y transformación. Aquí, te invitamos a un viaje de descubrimiento espiritual, a encontrar un propósito más profundo en la vida y a construir relaciones significativas con Dios y con los demás.</p>
        </article>

        <picture className="flex justify-center w-[45%] ">
          <img src={logo} alt="" />
        </picture>

      </section>
    
    </header>
  )
}

export default LandingPage