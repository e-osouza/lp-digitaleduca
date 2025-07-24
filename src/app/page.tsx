import CardCurso from "../../componentes/cardCurso";
import Image from "next/image";
import ImageSwiper from "../../componentes/slideCursos";
import { BadgeCheck, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, CirclePlay, GraduationCap, LucideGraduationCap, ShieldCheck, TvMinimal, UsersRound } from "lucide-react";
import FAQ from "../../componentes/faq";

export default function Home() {
  return (
    <>
    <div className="bg-[var(--primary)]">

      {/* hero banner */}
      <div className="bg-[var(--primary)] bg-[url(/bannerSuperior.png)] bg-top py-40">
        <div className="max-w-[var(--largura)] mx-auto px-5">
          <h1 className="text-white text-center text-5xl/13 font-extrabold">Se especialize em <span className="block text-[#efcf6b]">Marketing e Vendas</span></h1>
          <p className="text-white text-center mx-auto text-lg mt-5 max-w-[450px]">A plataforma completa para você dominar as habilidades que o mercado exige: do zero ao avançado.</p>
          <div className="flex gap-5 justify-center flex-col md:flex-row mt-15">
            <button className="bg-[var(--amarelo)] rounded-full px-8 py-5 text-md leading-[1] font-bold uppercase">Ver todos os cursos</button>
            <button className="border-2 border-white text-white rounded-full px-8 py-5 text-md leading-[1] font-bold uppercase">Começar agora</button>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="max-w-[var(--largura)] mx-auto px-5 py-20">
        <h3 className="text-3xl font-extrabold text-white w-[500px] mx-auto text-center mb-10">DSX 2025: as palestras que estão moldando o futuro dos negócios</h3>

        <div className="grid grid-cols-3 gap-8">
          <CardCurso/>
          <CardCurso/>
          <CardCurso/>
          <CardCurso/>
          <CardCurso/>
          <CardCurso/>
        </div>

        <button className="bg-[var(--amarelo)] rounded-full px-8 py-5 text-md leading-[1] font-bold uppercase block mx-auto mt-10">Assine para asssistir</button>
      </div>

      {/* section 3 */}
      <div className="max-w-[var(--largura)] mx-auto px-5 py-20">
        <div className="grid grid-cols-5 gap-5 items-center">
          <div className="col-span-3 max-w-[450px]">
            <h3 className="text-4xl font-extrabold text-white mb-4">Aprenda direto com os palestrantes do DSX 2025</h3>
            <span className="text-white">Acesse agora insights práticos dos palestrantes e descubra o que pode acelerar o crescimento do seu negócio.</span>
          </div>
          <div className="flex gap-5 col-span-2 justify-end">
            <Image src="/papodigital.svg" alt="Digital Educa" width={120} height={40} priority />
            <Image src="/40anos.svg" alt="Digital Educa" width={120} height={40} priority />
          </div>
        </div>
        <ImageSwiper />
      </div>

      {/* section 4 */}
      <div className="max-w-[var(--largura)] mx-auto px-5 mb-15">
        <div className="text-white text-center mb-10">
          <h3 className="text-3xl font-extrabold mb-2">Próximos cursos que vão mudar o jogo</h3>
          <span>Conteúdo pensado para acelerar sua jornada profissional.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 max-w-[700px]">
          <div className="border-2 border-[#0D68F9] rounded-xl w-full relative overflow-hidden">
            <span className="absolute top-4 right-4 z-3 bg-[var(--amarelo)] text-sm uppercase font-bold leading-[1] text-black rounded-full px-4 py-2">Em breve</span>
            <Image src="/iconcadeado.svg" alt="" width={250} height={250} priority className="absolute left-[-40px] top-[20px]"/>
            <Image
              src="/capa-curso.svg"
              alt="Capa"
              className="w-full h-auto"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <h3 className="text-white p-5 font-semibold text-2xl leading-[1.2] aspect-20/13">Método QVO - Como criar apresentar e converter ofertas no B2B</h3>
            <div className="border-t-1 border-[#0D68F9] p-3 flex gap-1 items-center text-[12px]">
              <div className="flex gap-1 items-center justify-center text-[#0D68F9] min-w-[33.333%]"><ChartNoAxesColumnIncreasing size={20}/>Avançado</div>
              <div className="flex gap-1 items-center justify-center text-[#0D68F9] min-w-[33.333%]"><CirclePlay size={20}/>+120h de Aulas</div>
              <div className="flex gap-1 items-center justify-center text-[#0D68F9] min-w-[33.333%]"><LucideGraduationCap size={20}/>Cerfificado</div>
            </div>
          </div>
          <div className="border-2 border-[#0D68F9] rounded-xl w-full relative overflow-hidden">
            <span className="absolute top-4 right-4 z-3 bg-[var(--amarelo)] text-sm uppercase font-bold leading-[1] text-black rounded-full px-4 py-2">Em breve</span>
            <Image src="/iconcadeado.svg" alt="" width={250} height={250} priority className="absolute left-[-40px] top-[20px]"/>
            <Image
              src="/capa-curso.svg"
              alt="Capa"
              className="w-full h-auto"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <h3 className="text-white p-5 font-semibold text-2xl leading-[1.2] aspect-20/13">Vendas previsíveis - A base sólida para escalar seu faturamento</h3>
            <div className="border-t-1 border-[#0D68F9] p-3 flex gap-1 items-center text-[12px]">
              <div className="flex gap-1 items-center justify-center text-[#0D68F9] min-w-[33.333%]"><ChartNoAxesColumnIncreasing size={20}/>Avançado</div>
              <div className="flex gap-1 items-center justify-center text-[#0D68F9] min-w-[33.333%]"><CirclePlay size={20}/>+120h de Aulas</div>
              <div className="flex gap-1 items-center justify-center text-[#0D68F9] min-w-[33.333%]"><LucideGraduationCap size={20}/>Cerfificado</div>
            </div>
          </div>
        </div>

      </div>

        {/* section 5 */}
      <div className="max-w-[var(--largura)] mx-auto">
        <div className="h-auto w-[350px] mx-auto rounded-xl bg-[url('/bgpromo.svg'),linear-gradient(to_top,#0D68F9,#6A97FA)] bg-size-[100%_auto] bg-center bg-no-repeat text-white p-8 text-center">
          <h3 className="text-xl font-bold uppercase mb-3">Assinatura Anual</h3>
          <p className="text-lg leading-[1.2]">Comece hoje e mude sua carreira profissional.</p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <Image src="/badge.svg" alt="" width={50} height={50}/>
            <button className="rounded-full border-2 text-white leading-[1] font-bold px-4 py-2 uppercase">1 ano de acesso</button>
          </div>
          <h4 className="text-4xl font-bold mt-4 mb-5">R$350,00</h4>
          <button className="uppercase bg-[var(--amarelo)] rounded-full font-bold text-black px-8 py-4">Garantir minha vaga</button>
          <p className="text-sm mt-5 flex gap-2 justify-center"><ShieldCheck size={20}/>Segurança de 7 dias para testes </p>
        </div>
      </div>

        {/* section 6 */}
      <div className="max-w-[var(--largura)] mx-auto px-5 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-15 items-center">
          <h3 className="text-3xl font-semibold text-white mb-5 md:mb-0 col-span-3">Experiência completa para quem quer ir <p className="font-black">além do básico</p></h3>
          <div className="grid grid-cols-4 gap-5 lg:gap-10 col-span-7">
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
