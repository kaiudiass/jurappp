import react,{ createContext, useEffect, useState } from "react"


const MenuContext = createContext()

export const MenuProvider = ({children}) =>{

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);
  const [menuAtivo, setMenuAtivo] = useState(false);


  console.log(menuAtivo)

  const alternarMenu = () => {
    setMenuAtivo((prevEstado) => !prevEstado);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10); // Atualiza o estado com base no scroll
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Executa apenas uma vez no início

  console.log(scrolled); // Deve exibir "true" ou "false" quando você rolar



  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.getElementById('header')?.offsetHeight || 0; // Altura da navbar (se houver)
    console.log(id)
  
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight - 100, // Subtrai a altura da navbar
        behavior: 'smooth', // Scroll suave
      });
    }
  };

  

  useEffect(() => {
    const handleResize = () => {
      // Atualiza o estado baseado na largura da janela
      setIsMobile(window.innerWidth <= 768);
    };

    // Adiciona o listener quando o componente é montado
    window.addEventListener('resize', handleResize);

    // Verificação inicial
    handleResize();

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if ( menuAtivo ) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Libera o scroll
    }
 return () => {
    document.body.style.overflow = "auto";
  };
}, [ menuAtivo ])




    return(
        <MenuContext.Provider value={{ isMobile, setIsMobile, menuAtivo, scrolled, setScrolled, alternarMenu ,scrollToSection}}>
            {children}
        </MenuContext.Provider>

    )

}

export default MenuContext