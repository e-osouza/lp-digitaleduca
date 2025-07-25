'use client';
import { useState } from 'react';

const faqItems = [
  {
    title: 'Quem pode fazer os cursos?',
    content:
      'Qualquer pessoa que queira aprender, se atualizar ou se especializar nas áreas de marketing, vendas, desenvolvimento web, liderança, design, tráfego pago, copywriting e muito mais. Seja você iniciante ou profissional em busca de evolução, os cursos são feitos para todos os níveis.',
  },
  {
    title: 'O acesso é vitalício?',
    content:
      'Não. A Digital Educa funciona por assinatura mensal ou anual. Enquanto sua assinatura estiver ativa, você tem acesso ilimitado a todos os conteúdos da plataforma.',
  },
  {
    title: 'Como recebo o certificado?',
    content:
      'Ao concluir um curso, o certificado digital é liberado automaticamente na plataforma, podendo ser baixado e compartilhado no seu currículo, LinkedIn ou com sua empresa.',
  },
  {
    title: 'Tem aulas ao vivo?',
    content:
      'Não. Todos os cursos são 100% gravados, com conteúdo direto ao ponto e estruturado para você aprender no seu ritmo, quando e onde quiser.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-[var(--largura)] mx-auto px-5 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 lg:gap-15 items-center mb-8">
        <h3 className="text-3xl font-extrabold text-white col-span-1 lg:col-span-4 text-center lg:text-left">FAQ Estratégico</h3>
        <div className="text-white lg:gap-10 col-span-1 lg:col-span-6 text-center lg:text-left">
          Respostas para dominar a plataforma de cursos e acelerar seu crescimento profissional!
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-2 text-white">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-gray-500 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
              activeIndex === index ? 'bg-gray-600 shadow-xl' : ''
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <h4 className="font-bold">{item.title}</h4>
            {activeIndex === index && (
              <p className="mt-3 text-white transition-opacity duration-300">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}