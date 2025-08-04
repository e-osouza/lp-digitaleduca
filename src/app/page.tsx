import Image from "next/image";
import { BadgeCheck, GraduationCap, ShieldCheck, TvMinimal, UsersRound } from "lucide-react";
import FAQ from "../../componentes/faq";
import SlideCursos from "../../componentes/slideCursos";
import CardLocais from "../../componentes/cardLocais";

export default function Home() {
  return (
    <>
    <div className="bg-[var(--primary)]">

        {/* hero banner */}
      <div className="bg-[var(--primary)] bg-[url(/bannerSuperior.png)] bg-top py-40">
        <div className="max-w-[var(--largura)] mx-auto px-5">
          <div className="max-w-[700px] mx-auto">
            <h1 className="text-white text-center lg:text-5xl/13 text-4xl/12 font-extrabold">Se especialize em <span className="block text-[#efcf6b]">Marketing, Vendas, Empreendedorismo e Inovação</span></h1>
            <p className="text-white text-center mx-auto text-lg mt-5 max-w-[450px]">A plataforma completa para você dominar as habilidades que o mercado exige: do zero ao avançado.</p>
          </div>
          <div className="flex gap-5 justify-center items-center flex-col md:flex-row mt-15">
            <a href="#cursos" className="bg-[var(--amarelo)] rounded-full px-8 py-5 text-md leading-[1] font-bold uppercase">Ver todos os cursos</a>
            <a href="https://painel.digitaleduca.com.vc/checkout" className="border-2 border-white text-white rounded-full px-8 py-5 text-md leading-[1] font-bold uppercase">Começar agora</a>
          </div>
        </div>
      </div>

        {/* section 2 */}
      <div id="cursos" className="lg:max-w-[var(--largura)] max-w-[100%] mx-auto px-0 lg:px-5 py-20">
        <h3 className="text-3xl font-extrabold text-white max-w-[500px] mx-auto text-center mb-10">DSX 2025: as palestras que estão moldando o futuro dos negócios</h3>
        <div className="">
          <CardLocais/>
        </div>

        <a href="https://painel.digitaleduca.com.vc/checkout" className="bg-[var(--amarelo)] rounded-full px-8 py-5 text-md leading-[1] font-bold table mx-auto mt-10 uppercase">Assine para assistir</a>
      </div>

        {/* section 3 */}
      <div className="lg:max-w-[var(--largura)] max-w-[100%] mx-auto px-0 lg:px-5 py-20">
        <div className="max-w-[620px] px-5 flex flex-col gap-5 items-center md:items-start">
          <Image src="/papodigital.svg" alt="Digital Educa" width={120} height={40} priority/>
          <h3 className="text-4xl font-extrabold text-center md:text-left text-white">Bate-papos exclusivos com 17 palestrantes nacionais do DSX 2025</h3>
          <p className="text-white text-center md:text-left w-full mb-5">Entrevistas inéditas com os nomes que estão moldando o futuro do marketing, vendas e negócios no Brasil.</p>
        </div>
        <SlideCursos />
      </div>

        {/* section 5 */}
      <div className="max-w-[var(--largura)] mx-auto">
        <div className="h-auto w-[350px] mx-auto rounded-xl bg-[url('/bgpromo.svg'),linear-gradient(to_top,#0D68F9,#6A97FA)] bg-size-[100%_auto] bg-center bg-no-repeat text-white p-8 text-center">
          <h3 className="text-xl font-bold uppercase mb-3">Assinatura Mensal</h3>
          <p className="text-lg leading-[1.2]">Comece hoje e mude sua carreira profissional.</p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <Image src="/badge.svg" alt="" width={50} height={50}/>
            <button className="rounded-full border-2 text-white leading-[1] font-bold px-4 py-2 uppercase">Plano mensal</button>
          </div>
          <div className="flex gap-2 justify-center items-center mt-4 mb-2">
            <p>De</p>
            <p className="line-through text-xl leading-[1]">R$149,00</p>
            <p>por</p>
          </div>
          <h4 className="text-4xl font-bold mb-5">R$79,90</h4>
          <a href="https://painel.digitaleduca.com.vc/checkout" className="uppercase block bg-[var(--amarelo)] rounded-full font-bold text-black px-8 py-4">Garantir minha vaga</a>
          <p className="text-sm mt-5 flex gap-2 justify-center"><ShieldCheck size={20}/>Segurança de 7 dias para testes </p>
        </div>
      </div>

        {/* section 6 cta */}
      <div className="max-w-[var(--largura)] mx-auto px-5 py-20 flex flex-col items-center">
        <h2 className="text-white text-3xl font-semibold">Para mais informações</h2>
        <a href="https://wa.me/559284358915" target="_blank" className="bg-[var(--amarelo)] rounded-full px-8 py-5 text-md leading-[1] font-bold table mx-auto mt-5 uppercase">Fale agora com o nosso time comercial</a>
      </div>

        {/* section 7 */}
      <div className="max-w-[var(--largura)] mx-auto px-5 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-15 items-center">
          <h3 className="text-3xl font-semibold text-white mb-5 md:mb-0 col-span-1 lg:col-span-3 text-center lg:text-left">Experiência completa para quem quer ir <p className="font-black">além do básico</p></h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 col-span-1 lg:col-span-7">
            <div className="text-white">
              <div className="bg-[var(--secondary)] w-10 h-10 rounded-lg flex justify-center items-center mb-3">
                <GraduationCap/>
              </div>
              <span className="text-lg leading-1">Instrutores do mercado real</span>
            </div>
            <div className="text-white">
              <div className="bg-[var(--secondary)] w-10 h-10 rounded-lg flex justify-center items-center mb-3">
                <BadgeCheck/>
              </div>
              <span className="text-lg leading-1">Certificados validados</span>
            </div>
            <div className="text-white">
              <div className="bg-[var(--secondary)] w-10 h-10 rounded-lg flex justify-center items-center mb-3">
                <UsersRound/>
              </div>
              <span className="text-lg leading-1">Comunidade ativa para dúvidas e networking</span>
            </div>
            <div className="text-white">
              <div className="bg-[var(--secondary)] w-10 h-10 rounded-lg flex justify-center items-center mb-3">
                <TvMinimal/>
              </div>
              <span className="text-lg leading-1">Aulas 100% online</span>
            </div>
          </div>
        </div>

      </div>

        {/* FAQ */}
      <FAQ/>

    </div>
    </>
  );
}
