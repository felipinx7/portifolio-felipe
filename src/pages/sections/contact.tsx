import { CardContact } from "../../components/card-contact";
import { TextNetworkSocial } from "../../constants/text-network-social";

export function Contact() {
  return (
    <section>
      {/* Container text  */}
      <div className="flex flex-col w-full text-center pt-12 pb-8 justify-center items-center">
        <p className="font-poppins-medium text-primary-300">PORTFÓLIO</p>
        <h1 className="font-poppins-bold text-white w-full max-md:leading-12 text-[3rem]">
          Vamos trabalhar <span className="text-primary-400">juntos?</span>{" "}
        </h1>
        <p className="font-poppins-light max-md:pt-4 text-white">
          Estou sempre aberto a novos projetos e oportunidades. Entre em contato{" "}
          <br className="max-md:hidden"/>
          através das minhas redes sociais!
        </p>
      </div>

      {/* container contact  */}
      <div className="w-full flex items-center justify-center">
        <div className="flex gap-12 items-center justify-center">
          {TextNetworkSocial.map((contact) => (
            <CardContact {...contact} key={contact.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
