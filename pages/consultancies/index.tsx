import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LinkButton, { LinkButtonType } from "../../components/LinkButton"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader, titles } from "../../config/labels"
import { links } from "../../config/links"
import styles from "./styles.module.css"

const Consultancies: NextPage = () => {
  return (
    <>
      <Head>
        <title>{titles.consultancies}</title>
      </Head>
      <Header />
      <PageContent>
        <h1 className={styles.Title}>Agendemos una asesoria</h1>
        <p className={styles.Text}>
          Mis asesorías consisten en un servicio profesional de información y
          consejo en temas y procesos relacionados con el diseño gráfico,
          incluyendo tópicos más específicos como la definición, concepción y
          construcción de marcas personales y empresariales.
        </p>
        <p className={styles.Text}>
          Las asesorías tienen un costo de $30 dólares americanos y duran 1
          hora.
        </p>
        <h2 className={styles.Subtitle}>¿Qué no incluyen las asesorías?</h2>
        <ul className={styles.Text}>
          <li>Servicio de Branding.</li>
        </ul>
        <LinkButton
          to={links.whatsappConsultancies}
          type={LinkButtonType.external}
        >
          Agenda tu asesoria
        </LinkButton>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.consultancies} />
    </>
  )
}

export default Consultancies
